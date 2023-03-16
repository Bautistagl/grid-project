import React from 'react'
import { gridLogo, gridLogoBlanco } from '../assets'
import "../styles/Principal.css"

const Principal = () => {
  return (
   <section className='contenedorPrincipal'>
  
     <div className='textos'>

        <div className='tituloPrincipal'>
       <span className='primeraParte'> ¿Buscas escalabilidad y precios accesibles para tu sitio web? </span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
        </div>
        <div className='subtituloPrincipal'>
        Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
        </div>
     </div>
          <img className='fotoPrincipal' src={gridLogoBlanco} alt="" />
    </section>
  )
}

export default Principal