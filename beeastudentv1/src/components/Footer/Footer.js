import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className='footer-logo'>
                <img src="images/logo.png" className="footer-logo-2"></img>
                <p>Bee A Student is Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut nulla elementum
                    egetduis convallis nulla in porta eget.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut nulla elementum eget
                    duis convallis nulla in porta eget. </p>
            </div>
            <div className='footer-contact-us'>
                <h2>Contact Us</h2>
                <p>Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
                <br></br>
                <p>beeasiswa@gmail.com</p>
            </div>
            <div className='footer-socmed'>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
    </footer>
  )
}

export default Footer;