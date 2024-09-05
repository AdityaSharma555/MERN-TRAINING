import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-max mx-auto bg-slate-600 flex justify-center'>
        <Link to="/" className='m-3'>HOME</Link>
        <Link to="/signup" className='m-3'>SIGNUP</Link>
        <Link to="/login" className='m-3'>LOGIN</Link>
    </div>
  )
}

export default NavBar