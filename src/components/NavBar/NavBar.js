import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

        //navbar component
        <nav className="navbar">
            <NavLink to="/" className="navbar__brand">
                Coffee<span className='navbar__brand-bold'>Land</span>
            </NavLink>

            <div className='navbar__menu'>
                <NavLink to="/" className='navbar__menu__link'>
                    Home
                </NavLink>
                <NavLink to="/AboutUs" className='navbar__menu__link'>
                    About Us
                </NavLink>
                <NavLink to="/Courses" className='navbar__menu__link'>
                    Courses
                </NavLink>
                <NavLink to="/Contact" className='navbar__menu__link'>
                    Contact
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;