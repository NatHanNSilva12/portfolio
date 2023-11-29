import React from 'react'
import './Home.css'
import img5 from '../../../src/images/eu.png'

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
          <p>Oi eu sou o</p>
          <h1>Nathan</h1>
          <h2>E eu sou um <span className="typing"></span></h2>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQyXE89SiWdWUUIT0Y_UeQAqc31YVEHlAfA-Ul1pZ0e16gi_RwY4934nF6EodHdr6L9K7PXqjr1jPfC/pub" target="_blank" rel="noopener noreferrer">Download Curriculum</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

