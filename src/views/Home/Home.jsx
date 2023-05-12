import React from 'react'
import './Home.css'
import img8 from '../../../src/images/home_page.png'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Oi, eu sou o</p>
          <h1>Nathan</h1>
          <h2>E eu sou um <span className="typing"></span></h2>
          <a href="docs.google.com/document/d/1E7zhlWK-4MBwGfX5JBsk96iJ7Bhttps://MOUsdJ/edit?usp=share_link&ouid=107708546702958327877&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Download Curriculum</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
