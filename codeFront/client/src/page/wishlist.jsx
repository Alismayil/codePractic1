import React, { useContext } from 'react'
import { WishlistContext } from '../context/wishlistContext'
import { BasketContext } from '../context/basketContext'

function Wishlist() {

  const {wishlist , handleCountVal,  handlleWishlistDelete}=useContext(WishlistContext)
  const { handleAddBasket } = useContext(BasketContext)

  return (
    <div style={{display:'flex', gap:"20px"}}>
      {
        wishlist && wishlist.map((item)=>(
          <div className='wishlistCart' style={{border:"1px solid black", width:"200px", display:"flex", justifyContent:"center",
          alignItems:"center", flexDirection:"column"}}>
              <img src={item.image} alt="" style={{maxWidth:"100px"}} />
              <p> {item.name}</p>
              <button onClick={()=>handleCountVal(item, true)}>+</button>
              <p>Count:{item.count}</p>
              <button onClick={()=>handleCountVal(item, false)}>-</button>
              <p>Price:{item.price}</p>
              <button onClick={()=>handlleWishlistDelete(item._id)}>x</button>
              <button onClick={()=>handleAddBasket(item, count)}>Add basket</button>
          </div>
        ))
      }
    </div>
  )
}

export default Wishlist