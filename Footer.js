import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <img src="./images/logo.png" className='footer-img' alt="logo"></img>
            <div className='footer-aboutus'>
                <p>Bee A Student is Lorem ipsum dolor sit amet,<br></br>
                        consectetur adipiscing elit. Ut nulla elementum<br></br>
                        egetduis convallis nulla in porta eget.
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut nulla elementum eget
                        duis convallis nulla in porta eget. </p>
            </div>
            <div className='footer-contactus'>
                <div className='footer-contactus-title'>Contact Us</div>
                <div className='footer-contactus-text'>
                    <p>
                        Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan
                        Coblong, Kota Bandung, Jawa Barat 40132
                    </p>
                    <p>
                        beeasiswa@gmail.com
                    </p>
                    <p>
                        +628XXXXXXXXXX
                    </p>
                    <p>
                        
                        +628XXXXXXXXXX
                    </p>

                </div>
            </div>
            <div className='footer-socmed'>
                <div className='footer-socmed'>Follow Us</div>
                <br></br>
                <div className='socmed-group'>
                    <div className='footer-linked-in'>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className='footer-linked-in'></FontAwesomeIcon>
                        </NavLink>
                    </div>
                    <div className='footer-twitter'>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faSquareTwitter} size="2x" className='footer-twitter'></FontAwesomeIcon>
                        </NavLink>
                    </div>
                    <div className='footer-instagram'>
                        <NavLink to ="https://www.instagram.com">
                        <FontAwesomeIcon icon={faSquareInstagram} size="2x" className='footer-instagram'></FontAwesomeIcon>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;