import React from 'react'
import './Home.css'

const Home = () => {
    return(
        <div className='home-container'>
            <div className='home-container2'>
                <div className='home-wrapper'>
                    <img src="./images/image10.jpg"></img>
                    </div>
                <div className='home-title'>
                    FIND YOUR 
                <div className='color-title'>SCHOLARSHIPS</div>
                <button className='buttonHome'><a href='/FindScholarships' className='directHome'>FIND HERE</a></button>
                </div>
                </div>
        </div>
    )
}

export default Home