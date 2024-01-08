import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{display:"flex" , gap :"20px"}}>
         <Link to={'/'}>Home</Link>
         <Link to={'/card'}>Card</Link>
         <Link to={'/add'}>Add</Link>
    </div>
  )
}

export default Navbar