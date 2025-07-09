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
    <section className="breadcrumb breadcrumb_bg bg-img-3 overlay2 ptb200">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 offset-lg-1">
                    <div className="breadcrumb_iner">
                        <div className="breadcrumb_iner_item">
                            <h2>Our Services</h2>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    
    <div className="service-area">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="section-title text-center mb-65">
                    <h3>Fulflling Your Dreams</h3>
                    <h4>Your Dreams and expression through CELL steel TMT bars, <br/> From homes to large Infra structural Projects
                        CELL steel TMT bars and application across different sectors.</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single-service">
                        <div className="service-thumb">
                            <img src="img/service/1.jpg" alt=''/>
                        </div>
                        <h3>INFRASTRUCTURE</h3>
                        
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single-service">
                        <div className="service-thumb">
                            <img src="img/service/2.jpg" alt=''/>
                        </div>
                        <h3>ARCHITECTURAL</h3>
                       
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single-service">
                        <div className="service-thumb">
                            <img src="img/service/1.jpg" alt=''/>
                        </div>
                        <h3>INDUSTRIAL</h3>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single-service">
                        <div className="service-thumb">
                            <img src="img/service/1.jpg" alt=''/>
                        </div>
                        <h3>GENERAL ENGINEERING</h3>
                        
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single-service">
                        <div className="service-thumb">
                            <img src="img/service/2.jpg" alt=''/>
                        </div>
                        <h3>COMMERCIAL</h3>
                       
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single-service">
                        <div className="service-thumb">
                            <img src="img/service/1.jpg" alt=''/>
                        </div>
                        <h3>RESIDENTIAL</h3>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="cta-area cta-bg-4">
        <div className="container">
            <div className="col-xl-6 col-lg-7">
                <div className="cta-content">
                    <h3>Fulflling Your Dreams</h3>
                    <p>Your Dreams and expression through CELL steel TMT bars, From homes to large Infra structural
                        Projects
                        CELL steel TMT bars and application across different sectors.</p>
                    <div className="cta-btn">
                    <a className="boxed-btn2 black-bg" href="https://wa.me/9182474546451" target="_blank" rel="noreferrer">Connect us <i
                                    className="Flaticon flaticon-right-arrow"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </>
);
}

export default Home;
  

