import React from 'react'
import '../styles/Services.css'
function Services() {
  return (
    <section className='contenedor1 services'>
        <img src="img/terceraIlustracion.svg" alt=""/>
        <div className='box-skills'>
            <h4><i className="far fa-check-circle"></i> Web design</h4>
            <h4><i className="far fa-check-circle"></i> Web development</h4>
            <h4><i className="far fa-check-circle"></i> SEO</h4>
            <h4><i className="far fa-check-circle"></i> Marketing</h4>
            <h4><i className="far fa-check-circle"></i> Web support</h4>
        </div>
    </section>
  )
}

export default Services