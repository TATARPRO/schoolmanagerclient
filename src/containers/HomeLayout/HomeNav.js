import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

import 'jquery'
import $ from 'jquery'
import jQuery from 'jquery'

const HomeNav = () => {
    return (
        <>
            <header className="header-section">
                <div className="container">

                    <Link to="/index" className="site-logo"><img src={logo} alt="logo" /></Link>
                    <div className="nav-switch">
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="header-info">
                        <div className="hf-item">
                            <i className="fa fa-clock-o"></i>
                            <p><span>School days:</span>Monday - Friday: 08 AM - 02 PM</p>
                        </div>
                        <div className="hf-item">
                            <i className="fa fa-map-marker"></i>
                            <p><span>Find us:</span>40 Baria Street 133/2, Gboko - Benue, Nigeria</p>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="nav-section">
                <div className="container">
                    <div className="nav-right">
                        <Link to="/login">RESULT CHECKER</Link>
                        <Link to="/login">LOGIN</Link>
                    </div>
                    <ul className="main-menu">
                        <li className="active"><Link to="/index">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/recent-events">Event</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact-us">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default HomeNav;