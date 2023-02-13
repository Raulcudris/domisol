import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='partFooter'>
           <img src="img/logo-jordan-alexander.png" alt=""/>
        </div>

        <div className='partFooter'>
        <h4>Servicios</h4>
            <a href="Home">Services 1</a>
            <a href="Home">Services 2</a>
            <a href="Home">Services 3</a>
        </div>
        <div className='partFooter'>
        <h4>Acerca de</h4>
            <a href="Home">About 1</a>
            <a href="Home">About 2</a>
            <a href="Home">About 3</a>
        </div>
        <div className='partFooter'>
        <h4>Redes sociales</h4>
            <div className="social-media">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
            </div>
        </div>

    </footer>
   )
}

export default Footer