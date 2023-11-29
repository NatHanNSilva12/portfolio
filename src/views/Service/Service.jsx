import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>Meus serviços</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Desenvolvimento Web" text = "Eu ofereço um vasto conhecimento em linguagens de programação web, como: HTML5, CSS3, JS e React" />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Desenvolvimento de software" text = "Conhecimento em desenvolvimento de software em C# e .NET"/>
        <ServiceBox animation = "fade-up" icon = "fas fa-gamepad" heading = "Game Design" text = "Conhecimento em game design, pixel art e animação" />
        <ServiceBox animation = "fade-up" icon = "fas fa-palette" heading = "Design" text = "Conhecimento em Adobe Photoshop e Adobe Illustrator para criação de logotipos" />
        <ServiceBox animation = "fade-up" icon = "fas fa-database" heading = "Banco de Dados SQL" text = "Conhecimento em sistema de banco de dados SQL" />
        <ServiceBox animation = "fade-up" icon = "fas fa-mobile" heading = "Desenvolvimento Mobile" text = "Desenvolvimento mobile em React Native e em breve Flutter" />
      </div>
    </div>
    </>
  )
}

export default Service
