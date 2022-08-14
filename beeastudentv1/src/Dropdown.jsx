import { useState } from "react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown ({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false)
    const jenis = ['Beasiswa Pemerintah', 'Beasiswa Internasional', 'Beasiswa Penelitian', 'Beasiswa non-Akademik', 'Beasiswa Ikatan Dinas', 'Pertukaran Pelajar']
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>Jenis
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </div>
            {isActive && (
            <div className="dropdown-content">
                {jenis.map(option=> (
                    <div onClick={e => {setSelected(option) 
                        setIsActive(false) 
                    }
                    }   className="dropdown-item">
                    {option}
                </div>    
                ))}  
            </div>
            )}
        </div>
        
    )
}


export default Dropdown
