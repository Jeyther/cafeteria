import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="footer">

            <div className="footer__wrapper">

                <NavLink to="/" className="footer__wrapper__marca">
                    Coffee<span className='footer__wrapper__marca-bold'>Land</span>
                </NavLink>

                <div className='footer__wrapper__menu'>
                    <NavLink to="/" className='footer__wrapper__menu__link'>
                        Home
                    </NavLink>
                    <NavLink to="/AboutUs" className='footer__wrapper__menu__link'>
                        About Us
                    </NavLink>
                    <NavLink to="/Courses" className='footer__wrapper__menu__link'>
                        Courses
                    </NavLink>
                    <NavLink to="/Contact" className='footer__wrapper__menu__link'>
                        Contact
                    </NavLink>
                </div>

            </div>

        </div>

    );
}

export default Footer;