import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
        <div className='home-container-images'>
            <img src="./images/image1.jpg" className='home-image'></img>
        </div>
        <div className="home-container-text">
          <h1>FIND YOUR SCHOLARSHIPS</h1>
        </div>
    </div>
  )
}

export default Home