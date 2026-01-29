import React from 'react'
import { Div } from './NavbarStyled'
import { Link } from 'react-router-dom'

const Navbar=()=> {
  return (
    <>
    <Div>
   <div className='logo'>
    <img src='src\assets\inito.svg' alt='logo' />
   </div>
   <div>
        <Link className="navtitle" to="/">Form</Link>
        <Link className="navtitle" to="/card">Card</Link>
        <Link className="navtitle" to="/wishlist">Wishlist</Link>
        <Link className="navtitle" to="/accordion">Accordion</Link>
      </div>


   <button className='btn1'>Try Inito</button>
 </Div>  
 </>
  )
}

export default Navbar
