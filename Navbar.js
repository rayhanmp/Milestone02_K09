import React from 'react'
import { useState, useEffect} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

   

  return (
    <header>
    <nav className="navbar">
        <div className="navbar-container" bg-transparent>
            <Link to="/" className="nav-bar-logo" onClick={closeMobileMenu}>
                <img src="images/logo.png" className="logo" alt="logo"></img>
            </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={ click ? faXmark : faBars}></FontAwesomeIcon>
        </div>
        <div className="nav-menu">
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item' onClick={closeMobileMenu}>
                    <Link to ="/" className='nav-links'>
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/Aboutus" className='nav-links' onClick={closeMobileMenu}>
                        ABOUT US
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/Company" className='nav-links' onClick={closeMobileMenu}>
                        COMPANY/INSTITUTE
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/FindScholarships" className='nav-links' onClick={closeMobileMenu}>
                        FIND SCHOLARSHIPS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/FindAlumnus" className='nav-links' onClick={closeMobileMenu}>
                        FIND ALUMNUS
                    </Link>
                </li>
            </ul>
            {button && <button className='nav-links-mobile'><Link to="/Login">LOG IN</Link></button>}
        </div>
    </nav>
    </header>
  )
}

export default Navbar