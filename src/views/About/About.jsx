import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/nathan.jpg'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>Sobre mim</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Oi, eu sou o Nathan</h2>
        <p>Olá, meu nome é Nathan Silva, sou um desenvolvedor front-end, amante de programação e design e estou sempre procurando me superar cada vez mais!</p>
        <a href="https://www.linkedin.com/in/nathan-silva-5abb8a241/" target="_blank" rel="noopener noreferrer">Este sou eu</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
