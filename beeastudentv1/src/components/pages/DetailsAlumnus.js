import React from 'react'
import './DetailsAlumnus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareTwitter, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom'



function DetailsAlumnus() {
  return (
    <div className='detailAlumnusContainer'>
        <div className='detailAlumnusHeader'></div>
        <div className='profileAlumnus'>
          <div className='profpic'>
            <FontAwesomeIcon icon={faUser} className='profpicUpload'size='9x'></FontAwesomeIcon>
          </div>
          <div className='nama'>Ken Azizan</div>
          <div className='pekerjaan'>Student</div>
        </div>
      <div className='textAlumnus'>
        <div className='text-detailAlumnus'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui enim sapien eu, convallis. Lorem in elit ac sit. Etiam metus ornare in at etiam facilisi massa fringilla. Amet facilisis aenean morbi diam commodo lobortis quisque in. Eros, enim elit, turpis arcu euismod consequat diam. Mi nibh fringilla pellentesque elementum augue scelerisque scelerisque. Ornare laoreet bibendum lacus diam. Eget malesuada bibendum interdum id risus sit ut. Scelerisque commodo aliquam felis venenatis, urna.
        </div>
      </div>
      <div className='socmedAlumnus'>
      <div className='socmed-groupDetailAlumnus'>
                    <div className='footer-linked-in'>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="4x" className='footer-linked-inDetailsAlumnus'></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className='footer-twitter'>
                        <a href="https://twitter.com/explore" target="_blank">
                            <FontAwesomeIcon icon={faSquareTwitter} size="4x" className='footer-twitterDetailsAlumnus'></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className='footer-instagram'>
                        <a href ="https://www.instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faSquareInstagram} size="4x" className='footer-instagramDetailsAlumnus'></FontAwesomeIcon>
                        </a>
                    </div>
        <div className='profpicUX'>
        <div className='scholarUX'>Scolarships Experience</div>
          <div className='scholarwrap'>
            <div className='scholarAlumnus'>Arial Scholar</div>
            <div className='scholarperiod'>2021-2022</div>
            </div>
            <div className='scholarwrap2'>
            <div className='scholarAlumnus'>Arial Scholar</div>
            <div className='scholarperiod'>2021-2022</div>
            </div>
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailsAlumnus