import React from 'react';
//import { Link } from "react-router-dom";
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
            <section className="breadcrumb breadcrumb_bg bg-img-2 overlay2 ptb200">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-1">
                            <div className="breadcrumb_iner">
                                <div className="breadcrumb_iner_item">
                                    <h2>Our Company</h2>
                                    <p> <a href='/home'>Home -</a> <span></span> About</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="about-area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-md-12 col-lg-6">
                            <div className="about-thumb">
                                <img src="/img/aboutsteel.jpg" alt="aboutus" />
                                <a className="video-icon popup-video" href="/Login" rel="noreferrer">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12 col-lg-6">
                            <div className="section-title mb-65">
                                <span>About METALLURGICAL ENGINEERS </span>
                                <h4>Let’s go through an example,</h4>
                                <p className="para-text">

                                    When Aeroplane took off in the air for the very first time, it seemed as the capacity of engine was carrying
                                    the plane’s body. To reduce the weight of the aircraft, Metallurgical Engineers designed thin body sheet
                                    with less weight, maximum strength which can withstand hot as well as cool weather conditions. This is a
                                    key innovation that played crucial role in Airline industry.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counter-area gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single-counter">
                                <div className="icon">
                                    <img src="img/icon/conunter-icon.png" alt="" />
                                </div>
                                <div className="counter-number">
                                    <h3><span className="counter">150</span><span>+</span></h3>
                                    <p>Business <span>Completed</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-counter">
                                <div className="icon">
                                    <img src="img/icon/conunter-icon2.png" alt="" />
                                </div>
                                <div className="counter-number">
                                    <h3><span className="counter">5</span><span>+</span></h3>
                                    <p><span>Dedicated team</span> Business</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-counter">
                                <div className="icon">
                                    <img src="img/icon/conunter-icon3.png" alt="" />
                                </div>
                                <div className="counter-number">
                                    <h3><span className="counter">120</span><span>+</span></h3>
                                    <p>Positive <span>review</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-area section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-md-12 col-lg-6">
                            <div className="section-title mb-65 p-0">
                                <span>WHAT METALLURGICAL ENGINEERS DISCOVERED FOR US?</span>

                                <p className="para-text">
                                    They have selected the best Virgin Iron Ore, alloyed it with metal compounds and chemicals which then
                                    subjected to tests with stringent guidelines. Based on the precision, they developed “Uniform Structural
                                    Iron Cell Steel“. This versatile TMT steel has become the pride of Metallurgical Engineers.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12 col-lg-6">
                            <div className="about-thumb">
                                <img src="img/aboutsteel1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-area cta-bg-2">
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


