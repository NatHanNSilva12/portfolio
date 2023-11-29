import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='author'>
        <p>Criado por <a href="https://docs.google.com/document/d/e/2PACX-1vQyXE89SiWdWUUIT0Y_UeQAqc31YVEHlAfA-Ul1pZ0e16gi_RwY4934nF6EodHdr6L9K7PXqjr1jPfC/pub" target="_blank" rel="noopener noreferrer">Nathan Silva</a> com <i className='far fa-heart'></i></p>
        <p>Este site está em constante atualização</p>
        </div>
        <div className=''>
        <p className='copyright'> <i className='far fa-copyright'></i> 2023 All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer
