import 'dotenv/config';
import express from 'express';
import twilio from 'twilio';
import cors from 'cors';
import conn from './db/conn.js';

console.log(conn)

//let db = void 0;

let db = await conn();
// let  db = conn;
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


express()
  .use(cors())
  .use(express.json())
  .post('/send-otp', async (req, res) => {
    try {
      if (!req.body.to || !req.body.name) {
        return res.status(400).json({
          success: false,
          error: 'Phone number and name are required'
        });
      }

      const collection = db.collection('users');
      // Check if user already exists
      const existingUser = await collection.findOne({ phoneNumber: req.body.to });

      if (!existingUser) {
        // Insert new user if doesn't exist
        await collection.insertOne({
          name: req.body.name,
          phoneNumber: req.body.to,
          createdAt: new Date()
        });
      }

      // Send OTP
      await client.verify.v2
        .services(process.env.TWILIO_VERIFY_SID)
        .verifications.create({
          to: `+91${req.body.to}`,
          channel: 'sms'
        });

      return res.json({
        success: true,
        message: 'OTP sent successfully'
      });
    } catch (err) {
      console.error('Error in /send-otp:', err);
      return res.status(500).json({
        success: false,
        error: 'Failed to send OTP'
      });
    }
  })

.post('/verify-otp', async (req, res) => {
  console.log('Raw request body:', req.body); // Add this for debugging

  // Validate Content-Type header
  if (!req.is('application/json')) {
    return res.status(400).json({ error: 'Content-Type must be application/json' });
  }

  try {
    if (!req.body.to || !req.body.code) {
      return res.status(400).json({
        error: 'Both phone number and OTP code are required',
        received: req.body // Echo back what we received for debugging
      });
    }

    // Validate phone number format
    if (!/^\d{10}$/.test(req.body.to)) {
      return res.status(400).json({ error: 'Phone number must be 10 digits' });
    }

    // Validate OTP format (assuming 6 digits)
    if (!/^\d{6}$/.test(req.body.code)) {
      return res.status(400).json({ error: 'OTP must be 6 digits' });
    }

    const verification_check = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({
        to: `+91${req.body.to}`,
        code: req.body.code
      });

    console.log('Twilio verification response:', verification_check.status);

    return res.json({
      success: verification_check.status === 'approved',
      status: verification_check.status
    });
  } catch (err) {
    console.error('Full verification error:', err);
    return res.status(400).json({
      error: 'OTP verification failed',
      details: err.message,
      twilioError: err.code
    });
  }
})

  .post('/verify-coupon', async (req, res) => {
    //console.log(req.body)
    if (!req.body.code) return res.status(400).json({ error: 'Coupon code is required' });
    else {
      const { code, phNumber, userName } = req.body?.code
      console.log('Received code:', code);// Log incoming data
      let couponsInfo = await db.coupons.findOne({ Code: req.body.code });
      console.log(couponsInfo);

      let set = await db.coupons.findOne({ Code: req.body.code }, (err, coupon) => coupon)
      const collection = db.collection('coupon_report')

      if (!set) {
        await collection.insertOne({ code: code, phNumber: phNumber, userName, isValid: false })
        return res.json({ error: 'Coupon code didnt match, Please try with other Coupons', colour: 'red' });
      }
      else if (set.used) {
        await collection.insertOne({ code: code, phNumber: phNumber, isValid: false })
        return res.json({ error: 'Coupon already redeemed', colour: 'green' });
      }
      else {
        await collection.insertOne({ code: code, phNumber: phNumber, userName, isValid: true })
        await db.coupons.updateOne({ _id: set._id }, { $set: { used: true } })
        return res.json({ success: true });
      }
    }
  })


  .listen(process.env.API_PORT, async () => {
    db = await conn();
    console.log(`Server is running on http://localhost:${process.env.API_PORT}`);
  });

