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
                                    <h2>Gallery</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="main-project-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src="img/pimg.JPG" alt='proz1' />
                                </div>
                                <div className="project-info">
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src="img/pimg.JPG" alt='proz2' />
                                </div>
                                <div className="project-info">

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-project">
                                <div className="project-thumb">
                                    <img src="img/pimg.JPG" alt='proz3' />
                                </div>

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


