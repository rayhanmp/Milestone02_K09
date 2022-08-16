import React from 'react';
import "./FindScholarships.css";
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCalendarDays, faSchool, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import dataScholar from './ScholarData';
import FilterDua from '../Filter/FilterDua';
import FilterSatu from '../Filter/FilterSatu';


const FindScholarships = () => {

  const [filter, setFilter] =useState('');

    const searchText = (e) => {
        setFilter(e.target.value)
    };

    let dataScholarSearch = dataScholar.filter(item =>{
        return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter))
    });

  
  

  return(
    <div className="wrapper">
        <div className="TitleWrapper">
          <div className='title-scholar'>Find Scholarships</div>
          <div className='searchInput-Scholar'>
                <div className='searchBarScholar'>
                    <input 
                    id='searchInputScholar' 
                    type='text' 
                    className='search-Scholar'
                    placeholder='Search here...'
                    value={filter} onChange={searchText.bind(this)}
                    >
                    </input>
                </div>
            </div>
          <div className='scholar-list'>
            {dataScholarSearch.map((item, index) => {
              return(
              <div className='warp-allcard'>
                <div className='card-wrapper' key={item.id}>
                  <div className='card-right'>
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </div>
                  <div className='card-left'>
                  <Link to='/DetailScholarship' className='scholar-name'>{item.nama}</Link>
                  <ul key={item.id}>
                    <li className='scholar-detail'><FontAwesomeIcon icon={faBookOpen} className='icon-color'/> {item.jenis}</li>
                    <li className='scholar-detail'><FontAwesomeIcon icon={faCalendarDays}className='icon-color'/> {item.periode}</li>
                    <li className='scholar-detail'><FontAwesomeIcon icon={faSchool}className='icon-color'/> {item.tingkat}</li>
                  </ul>
                </div>
              </div>
            </div>
              )
            })}
          </div>
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