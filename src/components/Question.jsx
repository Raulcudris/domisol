import React from 'react'
import '../styles/Question.css';
function Question() {
  return (
    <section className='questions contenedor'>
        <section className="textos-questions">
            <h1>Our creativity is your success</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorum.</p>
            <a href="Home">Learn more</a>
        </section>
        <img src="img/segundaIlustracion.svg" alt="" data-aos="zoom-out-up" data-aos-duration="2000" />
    </section>
  )
}

export default Question