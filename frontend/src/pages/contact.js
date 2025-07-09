import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import '../css/style.css';
import '../css/magnific-popup.css';
import '../css/font-awesome.min.css';
import '../css/themify-icons.css';
import '../css/nice-select.css';
import '../css/flaticon.css';
import '../css/animate.css';
import '../css/slicknav.css';
import '../js/mail-script.js';


function Home() {
  return (
    <>
    <section className="breadcrumb breadcrumb_bg bg-img-5 overlay2 ptb200">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 offset-lg-1">
                    <div className="breadcrumb_iner">
                        <div className="breadcrumb_iner_item">
                            <h2>Cell</h2>
                            <p> Pure Iron Cell Steel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 offset-lg-1 ">
                <iframe
                    src="https://maps.app.goo.gl/YxCurKgrGoUxa2mRA"
                    title="Google Maps Location"
                    target="_blank" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" >
                </iframe>

                </div>

                <div className="col-lg-3 offset-lg-4">
                    <h2 className="contact-title">Get in Touch</h2>
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-home"></i></span>

                        <div className="media-body">
                            <h3>Satyanagar Colony, Uppal, Medchal,
                            </h3>
                            <p>Hyderabad, IN 500039</p>
                        </div>
                    </div>
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                        <div className="media-body">
                            <h3>+91 82474546451</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-email"></i></span>
                        <div className="media-body">
                            <h3>monolineenterprises@gmail.com</h3>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    </>
);
}

export default Home;
  

