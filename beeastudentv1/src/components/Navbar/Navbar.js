import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <header>
    <nav className="navbar">
        <div className="navbar-container" bg-transparent>
            <Link to="/" className="nav-bar-logo">
                <img src="images/logo.png" className="logo"></img>
            </Link>
        </div>
        <div className='menu-icon'><i className='fas fa-bars'></i></div>
        <div className="nav-menu">
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to ="/" className='nav-links'>
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/Aboutus" className='nav-links'>
                        ABOUT US
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/Company" className='nav-links'>
                        COMPANY/INSTITUTE
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/FindScholarships" className='nav-links'>
                        FIND SCHOLARSHIPS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/FindAlumnus" className='nav-links'>
                        FIND ALUMNUS
                    </Link>
                </li><li className='nav-item'>
                    <Link to ="/Signup" className='nav-links-mobile'>
                        SIGN UP
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </header>
  )
}

export default navbar