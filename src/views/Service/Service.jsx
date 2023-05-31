import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>Meus serviços</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Desenvolvimento Web" text = "Eu ofereço um vasto conhecimento em linguagens de programação web, como: CSS, JSX, HTML." />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Desenvolvimento de software" text = "Conhecimento em programação para aplicativos, tanto mobile quanto para computador"/>
        <ServiceBox animation = "fade-up" icon = "fas fa-gamepad" heading = "Game Design" text = "Conhecimento em game design, pixel art e animação" />
        <ServiceBox animation = "fade-up" icon = "fas fa-pencil" heading = "Design" text = "Conhecimento em Adobe Photoshop e Adobe Illustrator para criação de logotipos" />
        <ServiceBox animation = "fade-up" icon = "fas fa-link" heading = "Redes de internet" text = "Conhecimento em redes de internet e protocólo de IPv4" />
        <ServiceBox animation = "fade-up" icon = "fas fa-video" heading = "Criação de thumbnail" text = "Conhecimento em criação de thumbnails para videos YouTube" />
      </div>
    </div>
    </>
  )
}

export default Service
