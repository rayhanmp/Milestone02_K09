import React from 'react';
import "./FindScholarships.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCalendarDays, faSchool, faUser} from '@fortawesome/free-solid-svg-icons';
import dataScholar from './ScholarData';
import FilterDua from '../Filter/FilterDua';
import FilterSatu from '../Filter/FilterSatu';


const FindScholarships = () => {
  const listScholar = dataScholar.map((item) =>
    <div className='warp-allcard'>
      <div className='card-wrapper' key={item.id}>
        <div className='card-right'>
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </div>
        <div className='card-left'>
          <Link to='/Detail' className='scholar-name'>{item.nama}</Link>
          <ul key={item.id}>
            <li className='scholar-detail'><FontAwesomeIcon icon={faBookOpen} className='icon-color'/> {item.jenis}</li>
            <li className='scholar-detail'><FontAwesomeIcon icon={faCalendarDays}className='icon-color'/> {item.periode}</li>
            <li className='scholar-detail'><FontAwesomeIcon icon={faSchool}className='icon-color'/> {item.tingkat}</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return(
    <div className="wrapper">
        <div className="TitleWrapper">
          <div className='title-scholar'>Find Scholarships</div>
          <div className='scholar-list'>{listScholar}</div>
        </div>
        <div className='FilterContainer'>
        <div className="FilterWrapper">
            <FilterSatu />
            <FilterDua />  
          </div>
        </div>
    </div>
  )
}
export default FindScholarships;