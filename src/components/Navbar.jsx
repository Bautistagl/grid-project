import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import { logoTransparente } from '../assets'
import NavPopUp from './NavPopUp'



function Navbar()  {
    const[dropdown,setDropdown] = useState(false)
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <Link to="/">
                   <img className='navbar-logo' src={logoTransparente}/>
             </Link>
             {dropdown && <NavPopUp/>}
        <ul className='nav-items'>
          <div className='nav-title'> Home</div>
          <div onClick={()=>setDropdown(!dropdown)}  className='nav-title'> Productos </div>
         
          <div className='nav-title'> Solutions </div>
          <div className='nav-title'> About Us </div>
          <div className='nav-title'> Contact </div>
        
        </ul>
        </nav>
    </>
  )
}

export default Navbar
