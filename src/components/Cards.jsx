import React from 'react'
import { cloudIcon } from '../assets'
import "../styles/Cards.css"
import Button from '../constants/Button'

const Cards = () => {
  return (
    <section className='card-contenedor'> 
    <div className='card3'>
    <img alt='' className='icono-card' src={cloudIcon}/>
      <div className='titulo-card'>
        Cloud Hosting
      </div>
      <div className='subtitulo-card'> Lorem ipsum dolor sit amecabo totam doloremque quia delectus animi error amet eveniet, libero iure adipisci lab</div>
      <button className='button-card'> Visit now </button>
    </div>
    <div className='card3'>
    <img alt='' className='icono-card' src={cloudIcon}/>
      <div className='titulo-card'>
        Web Hosting
      </div>
      <div className='subtitulo-card'>  Lorem ipsum dolor sit amecabo totam doloremque quia delectus animi error amet eveniet, libero iure adipisci lab</div>
      <button className='button-card'> Visit now </button>
      </div>
    <div className='card3'>
      <img alt='' className='icono-card' src={cloudIcon}/>
      <div className='titulo-card'>
       Game Servers
      </div>
      <div className='subtitulo-card'> Lorem ipsum dolor sit amecabo totam doloremque quia delectus animi error amet eveniet, libero iure adipisci lab </div>
      <button className='button-card'> Visit now </button>
      </div>
    </section>
  )
}

export default Cards