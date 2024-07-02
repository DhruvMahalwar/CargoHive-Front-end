import React, { useState, useEffect } from 'react'
import logo from '../images/travel_logo.jpg';
import './Navbar.css';
import { Link, useParams, useLocation } from 'react-router-dom';




function Navbar() {
    return (

        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    CARGOHIVE
                    <i class='fab fa-typo3' />
                </Link> 
            </div>
        </nav>

    );
}

export default Navbar;
