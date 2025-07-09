import { StrictMode } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/about';
import Service from './pages/service';
import Gallery from './pages/Gallery';
import Contact from './pages/contact';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Coupon from './pages/Coupon';
//import { useState } from 'react';

// Suppress ResizeObserver loop error
const resizeObserverLoopErrRe = /^ResizeObserver loop completed with undelivered notifications\.$/;
window.addEventListener('error', (event) => {
    if (resizeObserverLoopErrRe.test(event.message)) {
        event.stopImmediatePropagation();
    }
});

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <StrictMode>
            <Router>
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <Routes>
                    <Route excat path="/" element={<Home />} />
                    <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/coupon" element={<Coupon />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>
                <Footer />
            </Router>
        </StrictMode>
    );

}

export default App;