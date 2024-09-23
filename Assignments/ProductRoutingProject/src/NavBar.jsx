import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{backgroundColor : "black", display : "flex", justifyContent : "center"}}>

        <Link to="/"  style={{color : "white", margin : "20px"}}>Home</Link>
        <Link to="/products"  style={{color : "white", margin : "20px"}}>Products</Link>

    </div>
  )
}

export default NavBar