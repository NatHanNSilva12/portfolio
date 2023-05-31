import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/wotktale.png'
import img9 from '../../images/site-raffa.png'
import img8 from '../../images/site-finanças.png'
import img6 from '../../images/topgearclone.png'
import img5 from '../../images/jooj-lutcha.png'



function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>Meus Projetos</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Jogo para o projeto Hackathon" img= {img7} link = "https://gamer0097br.itch.io/worktale"  />
            <ProjectBox title = "Site para um corretor imobiliário" img= {img9} link = "https://site-raffa.vercel.app/"  />
            <ProjectBox title = "Site de controle financeiro" img= {img8} link = "https://controle-financeiro-black.vercel.app/"  />
            <ProjectBox title = "Clone de topgear em html" img= {img6} link = "https://topgear-html-clone.netlify.app"  />
            <ProjectBox title = "Jogo de luta em javascript" img= {img5} link = "https://jooj-lutcha.netlify.app/"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
