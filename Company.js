import React from 'react';
import "./Company.css"
import dataCompany from './Companydata';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Company = () => {
  const [filter, setFilter] =useState('');

  const searchText = (e) => {
    setFilter(e.target.value)
  };

  let dataSearch = dataCompany.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter))
  });

  return(
    <div className="company-wrapper">
        <div className="company-title">
          Company/Institute
        </div>
      <div className='company-body'>
        <div className="searchInput-company">
          <div className='searchbar'>
            <input id="searchInput" type="text" className="search-company"placeholder="Search here..."
            value={filter} onChange={searchText.bind(this)}/>
          </div>
          <div className='search-button'>
              <button className="company-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>

          
        {dataSearch.map((item, index)=>{
          return(
            <div className='company-cards'>
              <div className='company-cards-wrapper'>
                <div className='company-card' key={item.id}>
                  <div className='company-image'>{item.image}</div>
                  <div className='company-name'>{item.companyName}</div>
                  <div className='company-text'>{item.description}</div>
                </div>
              </div>
            </div>
            )
          })}
        
  
        </div>
      </div>
    </div>
  )
}

export default Company