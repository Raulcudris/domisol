import React from 'react';
import Navbar from '../components/Navbar'
import '../styles/Navbar.css'
import Image from '../assets/Dadidu-01.png'

function Header  () {
    return (
      <header>
        <Navbar />
        <div className='contenedor'>
        <section className="contenido-header">
                <section className="textos-header">
                    <h1>Nuestra creatividad es su éxito</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorum.</p>
                    <a href="Home">Ver Mas..</a>
                </section>
                <img src={Image} alt="" />
            </section>
        </div>
      </header>  
      );
}
export default Header;