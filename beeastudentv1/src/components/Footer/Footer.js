import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <img src="./images/logo.png" className='footer-img'></img>
            <div className='footer-aboutus'>
                <p>Bee A Student is Lorem ipsum dolor sit amet,<br></br>
                        consectetur adipiscing elit. Ut nulla elementum<br></br>
                        egetduis convallis nulla in porta eget.
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut nulla elementum eget
                        duis convallis nulla in porta eget. </p>
            </div>
            <div className='footer-contactus'>
                <h2>Contact Us</h2>
                <div className='footer-contactus-text'>
                    <p>
                        Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan
                        Coblong, Kota Bandung, Jawa Barat 40132
                    </p>
                    <br></br>
                    <p>
                        beeasiswa@gmail.com
                    </p>
                    <br></br>
                    <p>
                        +628XXXXXXXXXX
                        <br></br>
                        +628XXXXXXXXXX
                    </p>
                </div>
            </div>
            <div className='footer-socmed'>
                <h2>Follow Us</h2>
                <br></br>
                <div>
                    <a href="https://www.linkedin.com" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" className='footer-linked-in'></FontAwesomeIcon>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <FontAwesomeIcon icon={faSquareTwitter} size="3x" className='footer-twitter'></FontAwesomeIcon>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faSquareInstagram} size="3x" className='footer-instagram'></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer