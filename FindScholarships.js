import React from 'react';
import "./FindScholarships.css";
import { Link } from 'react-router-dom';

function FindScholarships() {
  return (
    <>
      <div className="wrapper">
        <div className="TitleWrapper">
          <h1>Find Scholarships</h1>
        </div>
        <div className="ContentWrapper">
          <div className="FilterWrapper">
            <div className="Filter first">
              <p>Jenis Beasiswa</p>
              <label class="container">Beasiswa Pemerintah
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Beasiswa Internasional
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Beasiswa Penelitian
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Beasiswa non-Akademik
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Beasiswa Ikatan Dinas
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Pertukaran Pelajar
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="Filter second">
              <p>Pendidikan</p>
              <label class="container">SMP/SEDERAJAT
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">SMA/SEDERAJAT
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">S1
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">S2
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">D3/D4
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="Filter third">
              <p>Jenis Beasiswa</p>
              <label class="container">Beasiswa Pemerintah
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Beasiswa Internasional
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Beasiswa Penelitian
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Beasiswa non-Akademik
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Pertukaran Pelajar
                <input type="checkbox"/>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="ResultsWrapper">
            <div className="ResultWrapper">
              <div className="Pict"></div>
              <div className="InfoWrapper">
                <div className="ResultTitle">
                  <Link to ="/Scholarship" className="ScholarshipLink">QUIPPER SCOLARSHIP AWARD</Link>
                </div>
                <div className="ResultType">Beasiswa non-Akademik</div>
                <div className="ResultDate">Pendaftaran 3 Januari-18 Maret 2022</div>
                <div className="ResultDegree">SMP/SEDERAJAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
    
  )
}

export default FindScholarships;