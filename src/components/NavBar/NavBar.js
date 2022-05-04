import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        //navbar component
        <nav className="navbar">
            <Link to="/" className="navbar__brand">
                Coffee<span className='navbar__brand-bold'>Land</span>
            </Link>

            <div className='navbar__menu'>
                <Link to="/AboutUs" className='navbar__menu__link'>
                    About Us
                </Link>
                <Link to="/Courses" className='navbar__menu__link'>
                    Courses
                </Link>
                <Link to="/Cotact" className='navbar__menu__link'>
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;