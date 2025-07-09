import speakeasy from 'speakeasy';
import crypto from 'crypto';

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const generateSecret = () => {
  return speakeasy.generateSecret({ length: 20 });
};

const generateStoredOTP = (secret) => {
  const otp = generateOTP();
  const token = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
  });
  return { otp, token };
};

const verifyOTP = (secret, userToken) => {
  return speakeasy.totp.verify({
    secret: secret.base32,
    encoding: 'base32',
    token: userToken,
    window: 1, // Allow tokens that were generated in the past 1 time step
  });
};

export default {
  generateSecret,
  generateStoredOTP,
  verifyOTP,
};
