import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Quién soy</p>
                    <p className='heading-text'>Sobre Mí</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Soy Técnico Informático con experiencia en desarrollo backend, especialmente en Python, incluyendo proyectos de procesamiento de datos e integración de IA y librerías especializadas. Cuento con sólidos conocimientos en programación, bases de datos y, de manera complementaria, automatización de tareas mediante scripts en entornos Linux.</p>
                        <br />
                        <p>Busco seguir desarrollándome profesionalmente en equipos donde la innovación y la eficiencia tecnológica sean pilares fundamentales.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
