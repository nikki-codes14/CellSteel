import '../css/login.css';
import React, { useState } from 'react';
import { commonrequest as get } from '../services/ApiCall.js';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userName: '',
    phoneNumber: '',
    otp: '',
    message: '',
    otpSent: false,
    loading: false
  });

  const [audioBusiness] = useState(new Audio('/assets/business.mp3'));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSendOTP = async () => {
    try {
        if (!userData.phoneNumber || !userData.userName) {
            setUserData(prevState => ({
                ...prevState,
                message: 'Phone number and name are required'
            }));
            return;
        }

        setUserData(prevState => ({
            ...prevState,
            loading: true,
            message: ''
        }));

        //const result =  await get('POST', `https://cellsteel.co/send-otp`, JSON.stringify({ to: userData.phoneNumber, name: userData.userName }));
  
        const result = await get('POST', `https://backend-80t3.onrender.com/send-otp`, {
            to: userData.phoneNumber, 
            name: userData.userName 
        });

        if (result.success) {
            setUserData(prevState => ({
                ...prevState,
                message: `OTP sent to ${userData.phoneNumber}`,
                otpSent: true
            }));
        } else {
            setUserData(prevState => ({
                ...prevState,
                message: result.error || 'Failed to send OTP'
            }));
        }
    } catch (error) {
        console.error('Error sending OTP:', error);
        setUserData(prevState => ({
            ...prevState,
            message: 'Failed to send OTP. Please try again.'
        }));
    } finally {
        setUserData(prevState => ({
            ...prevState,
            loading: false
        }));
    }
};

//const result = await get('POST', `https://cellsteel.co/verify-otp`, JSON.stringify({ to: userData.phoneNumber, code: userData.otp }));
const handleVerifyOTP = async () => {
  try {
    setUserData(prevState => ({
      ...prevState,
      loading: true,
      message: ''
    }));

    const payload = { 
      to: userData.phoneNumber, 
      code: userData.otp 
    };

    // Make sure your 'get' function is properly configured to:
    // 1. Set Content-Type header
    // 2. Not double-stringify the payload
    const result = await get('POST', `https://backend-80t3.onrender.com/verify-otp`, payload);

    if (result.data?.success) {
      navigate('/coupon?login=true', { 
        state: { 
          phNum: userData.phoneNumber, 
          userName: userData.userName 
        } 
      });
      props.setIsLoggedIn(true);
      
      let playCount = 0;
      const playAudio = () => {
        audioBusiness.play();
      };

      const audioEndedHandler = () => {
        playCount++;
        if (playCount < 2) {
          setTimeout(playAudio, 5000);
        }
      };

      audioBusiness.addEventListener('ended', audioEndedHandler);
      playAudio();

      return () => {
        audioBusiness.removeEventListener('ended', audioEndedHandler);
      };
    } else {
      setUserData(prevState => ({
        ...prevState,
        message: result.data?.error || 'Incorrect OTP'
      }));
    }
  } catch (error) {
    console.error('OTP Verification Error:', error);
    setUserData(prevState => ({
      ...prevState,
      message: error.response?.data?.error || 
               error.message || 
               'Failed to verify OTP'
    }));
  } finally {
    setUserData(prevState => ({
      ...prevState,
      loading: false
    }));
  }
};
  

  return (
    <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-form validate-form">
          <div className="otp_title">
            <h3 className="login100-form-title">Login with OTP</h3>
            {userData.message && userData.otpSent ? (
              <div>{userData.message}</div>
            ) : null}
          </div>

          {userData.otpSent ? (
            <>
              <div>
                <label>Enter OTP:</label>
                <input
                  className="input100"
                  type="text"
                  placeholder="Enter OTP"
                  name="otp"
                  value={userData.otp}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="login100-form-btn" onClick={handleVerifyOTP}>Verify OTP</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <label>User Name:</label>
                <input
                  className="input100"
                  type="text"
                  placeholder="Enter your name"
                  name="userName"
                  value={userData.userName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                  className="input100"
                  type="text"
                  placeholder="Enter your MobileNumber"
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <button className="login100-form-btn" onClick={handleSendOTP} disabled={userData.loading}>
                {userData.loading ? 'Sending...' : 'Send OTP'}
              </button>
              

            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Login;




