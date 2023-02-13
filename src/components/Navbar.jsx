import React from 'react'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav>
     <section class="contenedor nav">
            <div class="logo">
                <img src="img/logo-jordan-alexander.png" alt=""/>
            </div>
            <div class="enlaces-header">
                <a href="Home">Inicio</a>
                <a href="Sobre Nosotros">Sobre Nosotros</a>
                <a href="Perfiles">Perfiles</a>
                <a href="Contactos">Contactos</a>
            </div>
            <div class="hamburguer">
                <i class="fas fa-bars"></i>
            </div>
        </section>
    </nav>
  )
}

export default Navbar;