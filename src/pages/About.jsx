import React from 'react'
import '../styles/About.css'
function About() {
  return (
    <section className='about-us'>
        <div className='contenedor1'>
        <h2 className="titulo">We provide a wide range</h2>
            <div className="contenedor-articulo">
            <div className="articulo" data-aos="zoom-in-right">
                    <i className="fas fa-pen-fancy"></i>
                    <h3>Graphic design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime eius quo
                        consequuntur magni. Quis voluptate repudiandae soluta quod mollitia!</p>
                    <a href="Home">Read More</a>
                </div>
                <div className="articulo" data-aos="zoom-in-right">
                    <i className="fas fa-code"></i>
                    <h3>Web design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime eius quo
                        consequuntur magni. Quis voluptate repudiandae soluta quod mollitia!</p>
                    <a href="Home">Read more</a>
                </div>
                <div className="articulo" data-aos="zoom-in-right">
                    <i className="fas fa-cog"></i>
                    <h3>Video production</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime eius quo
                        consequuntur magni. Quis voluptate repudiandae soluta quod mollitia!</p>
                    <a href="Home">Read more</a>
                </div>
                <div className="articulo" data-aos="zoom-in-right">
                    <i className="fas fa-chart-pie"></i>
                    <h3>SEO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime eius quo
                        consequuntur magni. Quis voluptate repudiandae soluta quod mollitia!</p>
                    <a href="Home">Read more </a>
                </div>
                <div className="articulo" data-aos="zoom-in-right">
                    <i className="fas fa-comments"></i>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime eius quo
                        consequuntur magni. Quis voluptate repudiandae soluta quod mollitia!</p>
                    <a href="Home">Read more</a>
                </div>
                <div className="articulo" data-aos="zoom-in-right">
                    <i className="fas fa-chart-bar"></i>
                    <h3>Inphografics</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime eius quo
                        consequuntur magni. Quis voluptate repudiandae soluta quod mollitia!</p>
                    <a href="Home">Read more </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About