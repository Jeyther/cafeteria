import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="footer">

            <div className="footer__wrapper">

                <Link to="/" className="footer__wrapper__marca">
                    Coffee<span className='footer__wrapper__marca-bold'>Land</span>
                </Link>

                <div className='footer__wrapper__menu'>
                    <Link to="/Nosotros" className='footer__wrapper__menu__link'>
                        Nosotros
                    </Link>
                    <Link to="/Cursos" className='footer__wrapper__menu__link'>
                        Cursos
                    </Link>
                    <Link to="/Cotacto" className='footer__wrapper__menu__link'>
                        Contacto
                    </Link>
                </div>

            </div>

        </div>

    );
}

export default Footer;