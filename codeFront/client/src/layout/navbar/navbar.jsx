import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { BasketContext } from '../../context/basketContext';
import { WishlistContext } from '../../context/wishlistContext';

function Navbar() {
  const{basket}=useContext(BasketContext)
  const{wishlist}=useContext(WishlistContext)
  return (
    <div style={{display:"flex" , gap :"20px", height:"30px"}}>
         <Link to={'/'}>Home</Link>
         <Link to={'/card'}>Card</Link>
         <Link to={'/add'}>Add</Link>
         <Link to={'/wishlist'}>Wishlist</Link>
         {wishlist.length !== 0 ?
        <p>{wishlist.length}</p> : ""}
         <Link to={'/basket'}>Basket</Link>
         {basket.length !== 0 ?
        <p>{basket.length}</p> : ""}

         
    </div>
  )
}

export default Navbar