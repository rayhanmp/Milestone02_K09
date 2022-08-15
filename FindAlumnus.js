import React from 'react'
import dataAlumnus from './AlumnusData'
import './FindAlumnus.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const FindAlumnus = () => {

    const [filter, setFilter] =useState('');

    const searchText = (e) => {
        setFilter(e.target.value)
    };

    let dataAlumnusSearch = dataAlumnus.filter(item =>{
        return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter))
    });

    
    return(
        <div className='findAlumnus-wrapper'>
        <div className='findAlumnus-titlebg'>
            <div className='findAlumnus-title'>
                Find Alumnus
            </div>
        </div>

        <div className='findAlumnus-body'>

            <div className='searchInput-Alumnus'>
                <div className='searchBarAlumnus'>
                    <input 
                    id='searchInputAlumnus' 
                    type='text' 
                    className='search-Alumnus'
                    placeholder='Search here...'
                    value={filter} onChange={searchText.bind(this)}
                    >
                    </input>
                </div>
                <div className='searchAlumnus-button'>
                    <button className="alumnus-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
            </div>
            
            <div className='alumnus-cards'>
                {dataAlumnusSearch.map((item, index) => {
                    return(
                        <div className='warp-alumnus-card'>
                            <div className='cardAlumnus-wrapper' key={item.id}>
                                <div className='card-profile'></div>
                                <div className='card-details'>
                                <Link to='/DetailsAlumnus'>{item.namaAlunus}</Link>
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

export default FindAlumnus