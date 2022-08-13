import React from 'react';
import "./FindScholarships.css";
import { Link } from 'react-router-dom';
import FilterSatu from './Components/Filter/FilterSatu';
import FilterDua from './Components/Filter/FilterDua';

function FindScholarships() {
  return (
    <>
      <div className="wrapper">
        <div className="TitleWrapper">
          <h1>Find Scholarships</h1>
        </div>
        <div className="ContentWrapper">
          <div className="FilterWrapper">
            <FilterSatu />
            <FilterDua />  
          </div>

          <div className="ResultsWrapper">

            <div className="ResultWrapper">
              <div className='result-side-wrapper'>
                <div className='result-picture-wrapper'>
                  <div className='result-logo' > 
                    <img src="/images/PPMlogo.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className='result-description'>
                <Link to ="/Detail" className='result-title'>Beasiswa PPM School of Management</Link>
                <ul className='result-detail'>
                  <li><img src="/images/icon4.png" className="icon-4" alt="" />Beasiswa Pemerintah</li>
                  <li><img src="/images/icon5.png" className="icon-5" alt="" />Pendaftaran 3 Januari-8 Maret</li>
                  <li><img src="/images/icon6.png" className="icon-6" alt="" />SMA/SEDERAJAT</li>
                </ul>
              </div>
            </div>
            <div className="ResultWrapper">
              <div className='result-side-wrapper'>
                <div className='result-picture-wrapper'>
                  <div className='result-logo' > 
                    <img src="/images/PPMlogo.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className='result-description'>
                <Link to ="/Detail" className='result-title'>Beasiswa PPM School of Management</Link>
                <ul className='result-detail'>
                  <li><img src="/images/icon4.png" className="icon-4" alt="" />Beasiswa Pemerintah</li>
                  <li><img src="/images/icon5.png" className="icon-5" alt="" />Pendaftaran 3 Januari-8 Maret</li>
                  <li><img src="/images/icon6.png" className="icon-6" alt="" />SMA/SEDERAJAT</li>
                </ul>
              </div>
            </div>
            <div className="ResultWrapper">
              <div className='result-side-wrapper'>
                <div className='result-picture-wrapper'>
                  <div className='result-logo' > 
                    <img src="/images/PPMlogo.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className='result-description'>
                <Link to ="/Detail" className='result-title'>Beasiswa PPM School of Management</Link>
                <ul className='result-detail'>
                  <li><img src="/images/icon4.png" className="icon-4" alt="" />Beasiswa Pemerintah</li>
                  <li><img src="/images/icon5.png" className="icon-5" alt="" />Pendaftaran 3 Januari-8 Maret</li>
                  <li><img src="/images/icon6.png" className="icon-6" alt="" />SMA/SEDERAJAT</li>
                </ul>
              </div>
            </div>
            <div className="ResultWrapper">
              <div className='result-side-wrapper'>
                <div className='result-picture-wrapper'>
                  <div className='result-logo' > 
                    <img src="/images/PPMlogo.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className='result-description'>
                <Link to ="/Detail" className='result-title'>Beasiswa PPM School of Management</Link>
                <ul className='result-detail'>
                  <li><img src="/images/icon4.png" className="icon-4" alt="" />Beasiswa Pemerintah</li>
                  <li><img src="/images/icon5.png" className="icon-5" alt="" />Pendaftaran 3 Januari-8 Maret</li>
                  <li><img src="/images/icon6.png" className="icon-6" alt="" />SMA/SEDERAJAT</li>
                </ul>
              </div>
            </div>
            <div className="ResultWrapper">
              <div className='result-side-wrapper'>
                <div className='result-picture-wrapper'>
                  <div className='result-logo' > 
                    <img src="/images/PPMlogo.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className='result-description'>
                <Link to ="/Detail" className='result-title'>Beasiswa PPM School of Management</Link>
                <ul className='result-detail'>
                  <li><img src="/images/icon4.png" className="icon-4" alt="" />Beasiswa Pemerintah</li>
                  <li><img src="/images/icon5.png" className="icon-5" alt="" />Pendaftaran 3 Januari-8 Maret</li>
                  <li><img src="/images/icon6.png" className="icon-6" alt="" />SMA/SEDERAJAT</li>
                </ul>
              </div>
            </div>
            <div className="ResultWrapper">
              <div className='result-side-wrapper'>
                <div className='result-picture-wrapper'>
                  <div className='result-logo' > 
                    <img src="/images/PPMlogo.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className='result-description'>
                <Link to ="/Detail" className='result-title'>Beasiswa PPM School of Management</Link>
                <ul className='result-detail'>
                  <li><img src="/images/icon4.png" className="icon-4" alt="" />Beasiswa Pemerintah</li>
                  <li><img src="/images/icon5.png" className="icon-5" alt="" />Pendaftaran 3 Januari-8 Maret</li>
                  <li><img src="/images/icon6.png" className="icon-6" alt="" />SMA/SEDERAJAT</li>
                </ul>
              </div>
            </div>
            <div className="ResultWrapper">
              <div className='result-side-wrapper'>
                <div className='result-picture-wrapper'>
                  <div className='result-logo' > 
                    <img src="/images/PPMlogo.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className='result-description'>
                <Link to ="/Detail" className='result-title'>Beasiswa PPM School of Management</Link>
                <ul className='result-detail'>
                  <li><img src="/images/icon4.png" className="icon-4" alt="" />Beasiswa Pemerintah</li>
                  <li><img src="/images/icon5.png" className="icon-5" alt="" />Pendaftaran 3 Januari-8 Maret</li>
                  <li><img src="/images/icon6.png" className="icon-6" alt="" />SMA/SEDERAJAT</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>  
    </>
    
  )
}

export default FindScholarships;
