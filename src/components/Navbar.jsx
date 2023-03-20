import React,{useState,useEffect,useRef} from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import { gridLogo1 } from '../assets'
import { cloudIcon } from '../assets'



function Navbar()  {
    const[dropdown,setDropdown] = useState(true)
  //   const [isSticky, setIsSticky] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
        <nav className={`navbar `}>
            <Link to="/">
                   <img className='navbar-logo' src={gridLogo1}/>
             </Link>
        <ul className='nav-items'>
          <div className='nav-title'> Home</div>
          <div
          
           onMouseOver={() => setDropdown(true)}

          className='nav-title'> Productos </div>
          <div className='nav-title'> Solutions </div>
          <div className='nav-title'> About Us </div>
          <div className='nav-title'> Contact </div>
        </ul>
        </nav>
        <div className={`container-productos ${dropdown ? 'show' : ''}`}
          onMouseOver={() => setDropdown(true)}
          onMouseLeave={()=>setDropdown(false)}
          >
              <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Cloud Hosting  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> VPS  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Web Hosting  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Game Servers </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> VPN </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Fan Cooling Mobile  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Asic Mining </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={cloudIcon}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Immersion Cooling Mining </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
          </div>
    </>
  )
}

export default Navbar
