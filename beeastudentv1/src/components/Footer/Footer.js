import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-logo'>
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
                        Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan<br></br>
                        Coblong, Kota Bandung, Jawa Barat 40132
                    </p>
                    <p>
                        beeasiswa@gmail.com
                    </p>
                </div>
            </div>
            <div className='footer-socmed'>

            </div>
        </div>
    </div>
  )
}

export default Footer;