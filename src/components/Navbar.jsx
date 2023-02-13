import React from 'react';
import '../styles/Navbar.css';
/*import Logo from '../assets/logo-makiia.png';*/

function Navbar() {
  return (
    <nav>
     <section className="contenedor nav">
            <div className="logo">
                <img src='' alt=""/>
            </div>
            <div class="enlaces-header">
                <a href="Home">Inicio</a>
                <a href="About">Sobre Nosotros</a>
                <a href="Services">Servicios</a>
                <a href="Contactos">Contactos</a>
            </div>
            <div className="hamburguer">
                <i className="fas fa-bars"></i>
            </div>
        </section>
    </nav>
  )
}
export default Navbar;

