import React from 'react';
import { Link } from "react-router-dom";
import '../css/style.css';
import '../css/magnific-popup.css';
import '../css/font-awesome.min.css';
import '../css/themify-icons.css';
import '../css/nice-select.css';
import '../css/flaticon.css';
import '../css/animate.css';
import '../css/slicknav.css';
import '../js/mail-script.js';

const Footer = () => {

return (
  <div>
    <div className="addres-area black-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <div className="single-address text-center">
              <div className="addres-icon">
                <img src="img/icon/1.png" alt="location" />
              </div>
              <h3>Our Location</h3>
              <p>H.No. 2-3-55/88, Satyanagar Colony, <br /> Uppal, Medchal,
                Hyderabad</p>
              <a className="underline-hover" href="https://maps.app.goo.gl/YxCurKgrGoUxa2mRA" target="_blank" rel="noreferrer">Get Direction</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single-address text-center">
              <div className="addres-icon">
                <img src="img/icon/2.png" alt="timing" />
              </div>
              <h3>Opening hour</h3>
              <p>Mon-Sat (9.00-9.00pm) <br />
                Sun <span>(Closed)</span></p>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single-address text-center">
              <div className="addres-icon">
                <img src="img/icon/3.png" alt="message" />
              </div>
              <h3>Drop a message</h3>
              <p>+91 82474546451
              </p>
              <a className="underline-hover" href="https://wa.me/+9182474546451" target="_blank" rel="noreferrer">Connect us</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 col-md-3 col-xl-4">
            <div className="single-footer-widget footer_1">
              <a href='/home'> <img src="img/footlogo.png" alt="cellsteel.co" /> </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-2 col-xl-2">
            <div className="single-footer-widget">
              <h4>Company</h4>
              <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/service'>Services</a></li>
                <li><a href='/gallery'>Gallery</a></li>
                <li><a href='/contact'>Contact</a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-xl-3">
            <div className="single-footer-widget">
              <h4>Sectors</h4>
              <ul>
                <li>INFRASTRUCTURE</li>
                <li>ARCHITECTURAL</li>
                <li>INDUSTRIAL</li>
                <li>GENERAL ENGINEERING</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="copyright_part_text text-center">
              <p className="footer-text m-0">
                Copyright &copy; All rights reserved | This website is made by <Link to="https://abcs3d.com/" target="_blank">abcs3d</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer> </div>
);
}

export default Footer;




