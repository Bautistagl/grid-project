import React from 'react'
import { cloudIcon } from '../assets'
import "../styles/PopUp.css"

const NavPopUp = () => {
  return (
    <section className='section-container'>

        <div className='container-productos' >
            <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> Cloud Hosting  </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
             <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> VPS  </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
             <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> Web Hosting  </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
             <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> Game Servers </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
             <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> VPN </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
             <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> Fan Cooling Mobile  </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
             <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> Asic Mining </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
             <div className='productos'> 
             <img className='logo-productos' src={cloudIcon}/>
             <div  className='descripcion-productos'> 
             <span className='titulo-productos'> Immersion Cooling Mining </span>
             <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
             </div>
             </div>
        </div>



    </section>
  )
}

export default NavPopUp