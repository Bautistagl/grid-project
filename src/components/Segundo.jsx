import React from 'react'
import { gridLogo, gridLogoBlanco, mapa2, mapaMundo } from '../assets'
import "../styles/Segundo.css"

const Segundo = () => {
  return (
   <section className='contenedorSegundo'>
  
     <div className='textos'>

        <div className='tituloSegundo'>
       <span className='primeraParte'> Data Centers All Around The World </span>  
        </div>
        <div className='subtituloSegundo'>
        Regions: North America, Europe, Asia, South America, Africa, Oceania
           77 geographic location

        </div>
     </div>
          <img className='fotoSegundo' src={mapa2} alt="" />
    </section>
  )
}

export default Segundo