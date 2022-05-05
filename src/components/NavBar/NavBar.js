import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const style = {

        transform: isOpen?"translateY(0%)":"translateY(-150%)"


    }

    return (

        //navbar component
        <nav className="navbar">
            <NavLink to="/" className="navbar__brand">
                Coffee<span className='navbar__brand-bold'>Land</span>
            </NavLink>

            {isOpen ?
            (
            <span class="material-symbols-outlined navbar__button" onClick={() => setIsOpen(!isOpen)}>
                close
            </span>
            ) : (
            <span class="material-symbols-outlined navbar__button" onClick={() => setIsOpen(!isOpen)}>
                menu
            </span>
            )}


            {/* <div className={`navbar__menu ${isOpen ? 'show' : ''}`}> */}
            <div className={`navbar__menu`} style={style} onClick={() => setIsOpen(false)}>
                <div className='navbar__menu__item'>
                    <NavLink to="/" className='navbar__menu__item__link'>
                        Home
                    </NavLink>
                </div>
                <div className='navbar__menu__item'>
                    <NavLink to="/AboutUs" className='navbar__menu__item__link'>
                        About Us
                    </NavLink>
                </div>
                <div className='navbar__menu__item'>
                    <NavLink to="/Courses" className='navbar__menu__item__link'>
                        Courses
                    </NavLink>
                </div>
                <div className='navbar__menu__item'>
                    <NavLink to="/Contact" className='navbar__menu__item__link'>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;