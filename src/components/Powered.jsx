import React from 'react'
import { fluxLogo } from '../assets'
import "../styles/Powered.css"

const Powered = () => {
  return (
    <section className='contenedor-powered'>
    <div className='powered'>Powered by</div>
    <img className='logo-flux' alt=''  src={fluxLogo}/>

    </section>
  )
}

export default Powered