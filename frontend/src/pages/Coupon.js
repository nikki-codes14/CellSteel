import '../css/login.css'
// import { commonrequest as get } from '../services/ApiCall.js';
import { QrScanner } from '@yudiel/react-qr-scanner';
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import _debounce from 'lodash/debounce';
import axios from 'axios';

const Login = () => {
    const location = useLocation();
    const [modalPopUp, setModalPopUp] = useState(false)
    const [scanning, setScanning] = useState(true); // Track whether scanning is allowed
    const [code, setCode] = useState({
        code: '',
        phNumber: location.state?.phNum,
        userName: location.state?.userName
    });
    const [message, setMessage] = useState('');
    const [background, setBackground] = useState('');
    const [audioSuccess] = useState(new Audio('/assets/success.mp3'));
    //const [audioBusiness] = useState(new Audio('/assets/business.mp3'));

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('login') !== 'true') {
            window.location.href = '/login';
        }
    }, []);

    // const sendSMS = async (to, message) => {
    //     try {
    //         const response = await fetch('https://backend-80t3.onrender.com/send-sms', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ to, message })
    //         });

    //         const data = await response.json();
    //         if (data.success) {
    //             console.log('SMS sent successfully');
    //         } else {
    //             console.error('Error sending SMS:', data.error);
    //         }
    //     } catch (error) {
    //         console.error('Error sending SMS:', error);
    //     }
    // };

    const handleCodeVerify = useCallback(async () => {
        //setModalPopUp(false);
        
        try {
            console.log('Verifying code:', code);
            if(code?.code?.length !== 10){
                setMessage("Coupon code must be 10 digits");
                setBackground('red');
                setModalPopUp(true) 
                return;
            }

            //const result = await get('POST', 'https://cellsteel.co/verify-coupon', JSON.stringify({ code}));

            // const result = await get('POST', 'http://localhost:3000/verify-coupon', JSON.stringify({ code}));
            const result =  await axios.post('https://backend-80t3.onrender.com/verify-coupon', { code }, {
    headers: { 'Content-Type': 'application/json' },})
            if (result.data?.success) {
                setModalPopUp(true)
                setMessage('Success! Code is redeemed!');
                setBackground('green');
                //audioSuccess.play();

                // Send SMS
                // const smsMessage = `Hello ${code.userName}, your coupon code ${code.code} has been successfully redeemed!`;
                // sendSMS(code.phNumber, smsMessage);
                     
            } else {
                setMessage(result.data?.error);
                setBackground(result.data?.colour);
                setModalPopUp(true) 
            }
        } catch (error) {
            console.error(error);  
            console.error('Error verifying code:', error.response?.data || error.message);
            setMessage('An error occurred. Please try again.');
            setBackground('red');
            setModalPopUp(true);     
        }
    }, [code]);
    
    /*
    const handleQRDecode = _debounce(async (result) => {
        if (scanning ) {
            console.log('QR code scanned:', result);
            setScanning(false); // Stop further scanning
            setCode({ ...code, code: result });
            await handleCodeVerify();
        }
    }, 500);
    */

    const handleQRDecode = _debounce(async (result) => {
        if (scanning && !modalPopUp) {
            console.log('QR code scanned:', result);
            setScanning(false); // Stop further scanning
            setCode(prevCode => ({ ...prevCode, code: result }));
        }
    }, 100);

    useEffect(() => {
        if (code?.code?.length === 10) {
            handleCodeVerify();
        }
    }, [code.code, handleCodeVerify]);

    const onHide = () => {
        setModalPopUp(false); 
        if (message?.includes('Success! Code is redeemed')) {
            audioSuccess.play().catch(error => {
                console.error('Error playing audio:', error);
            });
         }
       setMessage('')
       setScanning(true); // Allow scanning again
    };


    return (
        <div className='container-login100'>
            <div className="wrap-login100">
                <div className='login100-form-title'>
                    < h4 style={{ opacity: 1 , color: background }}>{message}</h4>
                    <h5>Enter your coupon code below:</h5>
                    < input className='input100 ' type='text' pattern="[0-9]*" placeholder='Enter 10 digit code' maxLength={10}
                        value={code.code}
                        onChange={(e) => setCode({...code, code: e.target.value.replace(/\D/g, '')})} />
                    <button className='login100-form-btn' onClick={handleCodeVerify}> Check</button>

                    <QrScanner
                        onDecode={handleQRDecode}
                        onError={(error) => console.log(error?.message)}
                    />
                </div>
            </div>
            { modalPopUp &&
                <Modal
                    show={modalPopUp}
                    onHide={onHide}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h5>Coupon{code?.code ? `(${code?.code})` : null}</h5>
                            <p></p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ color: 'black' }}>Thank you for using CellSteel.</div>
                        <h6 style={{ color: background }}>
                            {message && (
                                <>
                                    <br />
                                    {message}
                                    {message?.includes('Success! Code is redeemed') && (
                                        <>
                                            <br />
                                            <p>Take a screenshot for your reference</p>
                                        </>
                                    )}
                                </>
                            )}
                        </h6>
                    </Modal.Body>

                   
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            }
        </div>
        
    );
};

export default Login;
