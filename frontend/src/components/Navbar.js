import { useState, useEffect } from 'react';
import '../css/style.css';
import '../css/magnific-popup.css';
import '../css/font-awesome.min.css';
import '../css/themify-icons.css';
import '../css/nice-select.css';
import '../css/flaticon.css';
import '../css/animate.css';
import '../css/slicknav.css';
import '../js/mail-script.js';
import { useLocation } from "react-router-dom";


const Header = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    // Get the value of 'login'
    const loginValue = queryParams.get("login");
    console.log(loginValue);

    useEffect(() => {
        setIsLoggedIn(props.isLoggedIn);
    }, [props.isLoggedIn]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (!isMobile) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="header-area">
            <div className="header-top black-bg d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="header-contact d-flex text-nowrap px-0 py-0">
                            <a href={'https://wa.me/+9182474546451'} className="px-5 py-0" target='_blank' rel="noreferrer"  ><i className="fa fa-phone"></i> +91 82474546451</a>
                            <a href='monolineenterprises@gmail.com' className="px-0 py-0" target='_blank' rel="noreferrer" ><i className="fa fa-envelope"></i> monolineenterprises@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='col-xl-2 col-lg-2'>
                    <nav className="navbar navbar-expand-lg navbar-light p-2">
                        <a className="navbar-brand" href="/login">
                            <img src="/img/celllogo.png" alt="celliron" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleMenu}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={menuOpen ? 'true' : 'false'}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarSupportedContent">
                            <ul className={`navbar-nav mr-auto${isMobile ? ' flex-column' : ''}`}>
                                <li>
                                    <a className="nav-link d-flex justify-content-center" href="/home">Home</a>
                                </li>
                                <li>
                                    <a className="nav-link d-flex justify-content-center" href="/about">About</a>
                                </li>
                                <li>
                                    <a className="nav-link d-flex justify-content-center" href="/services">Services</a>
                                </li>
                                <li>
                                    <a className="nav-link d-flex justify-content-center" href="/gallery">Gallery</a>
                                </li>
                                <li>
                                    <a className="nav-link d-flex justify-content-center" href="/contact">Contact</a>
                                </li>
                                <li>
                                    <a
                                        className="boxed-btn d-flex justify-content-center"
                                        href='/login'
                                        onClick={() => props.setIsLoggedIn(!isLoggedIn)}
                                    >
                                        {isLoggedIn && loginValue ? 'Logout' : 'Login'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;




