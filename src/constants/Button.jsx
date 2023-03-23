import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Button.css"

const Button = (texto) => {
  return (
    <Link to="#" >
        <button className='btn'>Visit Now</button>
    </Link>
  )
}

export default Button