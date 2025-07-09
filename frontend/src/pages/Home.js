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
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


function Home() {
    return (
        <>
            <div className="slider-area">
                <div className="slider-active owl-carousel">
                    <Slide>
                        <div className="single-slider bg-img-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 offset-xl-1 col-lg-7">
                                        <div className="slider-content">
                                            <p>MONOLINE ENTERPRISES PVT. LTD</p>
                                            <h3>DREAM OF ENGINEERS WORLD</h3>
                                            <div className="slider-btn">
                                                <a className="boxed-btn2" href='/service'>Our Services</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-slider bg-img-2"> </div>
                        <div className="single-slider bg-img-1"></div>
                    </Slide>
                </div>
            </div >



            <section className="services" >
                <div className="container">
                    <div className="title text-center">
                        <h6>Our Strength</h6>
                        <h1 className="title-blue">Why Choose Us</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4">
                                <div className="media" >
                                    <img className="mr-4" src="img/icon1.webp" alt="Iron Ore in the World" />
                                    <div className="media-body">
                                        <h5>Made from the Finest
                                            Iron Ore in the World</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media">
                                    <img className="mr-4" src="img/icon2.webp" alt="BIS Standard" />
                                    <div className="media-body">
                                        <h5>BIS Standard</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media">
                                    <img className="mr-4" src="img/icon3.webp" alt="Manufacturing Process" />
                                    <div className="media-body">
                                        <h5>World-Class
                                            Manufacturing Process</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media" >
                                    <img className="mr-4" src="img/icon4.webp" alt="Quality" />
                                    <div className="media-body">
                                        <h5>Various
                                            Quality Checks</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media">
                                    <img className="mr-4" src="img/icon5.webp" alt="Best End Cutting" />
                                    <div className="media-body">
                                        <h5>Best
                                            End Cutting</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media">
                                    <img className="mr-4" src="img/icon6.webp" alt="Finest Quality" />
                                    <div className="media-body">
                                        <h5>Finest Quality</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media">
                                    <img className="mr-4" src="img/icon7.webp" alt="Consistent"/>
                                    <div className="media-body">
                                        <h5>Consistent
                                            Thickness & Weight</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media" >
                                    <img className="mr-4" src="img/icon8.webp" alt="Straight Bars" />
                                    <div className="media-body">
                                        <h5>Straight
                                            Bars</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media" >
                                    <img className="mr-4" src="img/icon9.webp" alt="Perfect Bonding" />
                                    <div className="media-body">
                                        <h5>Perfect
                                            Bonding</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media" >
                                    <img className="mr-4" src="img/icon10.webp" alt="Easy to Use" />
                                    <div className="media-body">
                                        <h5>Easy to
                                            Use</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media" >
                                    <img className="mr-4" src="img/icon11.webp" alt="Identification" />
                                    <div className="media-body">
                                        <h5>Bundle Tag
                                            Identification</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="media" >
                                    <img className="mr-4" src="img/icon12.webp" alt="Quality" />
                                    <div className="media-body">
                                        <h5>Finest
                                            Quality</h5>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >

            <div className="service-area">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="section-title text-center mb-65">
                            <span>OUR STRENGTH</span>
                            <h3>We provide all of your <br />
                                industrial solution</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single-service">
                                <div className="service-thumb">
                                    <img src="img/cimg.jpg" alt="INDUSTRIAL" />
                                </div>
                                <h3>INDUSTRIAL</h3>

                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-service">
                                <div className="service-thumb">
                                    <img src="img/cimg1.jpg" alt="INFRASTRUCTURE" />
                                </div>
                                <h3>INFRASTRUCTURE</h3>

                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-service">
                                <div className="service-thumb">
                                    <img src="img/cimg2.jpg" alt="ARCHITECTURAL" />
                                </div>
                                <h3>ARCHITECTURAL</h3>
                                <p>.....</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-area bg-img-2 overlay">
                <div className="container-fluid p-lg-0">
                    <div className="row justify-content-center no-gutters">
                        <div className="col-xl-4 col-md-6">
                            <div className="section-title text-white mb-65 ">
                                <h3>CELL STEEL TMT BARS </h3>
                                <h4>ADVANTAGES</h4>
                                <p><span>Bendability</span></p>
                                <p><span>Uniform rib pattern</span></p>
                                <p> <span>Corrosion resistance</span></p>
                                <p> <span>Weldability</span></p>
                                <p> <span>Earthquake resistance</span></p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="cta-area cta-bg-3">
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


