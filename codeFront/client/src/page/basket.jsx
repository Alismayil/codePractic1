import React, { useContext } from 'react'
import { BasketContext } from '../context/basketContext'

function Basket() {

    const { basket, handleCountVal ,handlleBasketDelete ,subtotal  } = useContext(BasketContext)
    return (
        <div style={{display:'flex', gap:"20px"}}>
            <p>Subtotal:{subtotal}$</p>
            {
                basket && basket.map((item) => (
                    <div className='basketCard' style={{border:"1px solid black", width:"200px", display:"flex", justifyContent:"center",
                    alignItems:"center", flexDirection:"column"}}>
                        <img src={item.image} alt="" style={{maxWidth:"100px"}} />
                        <p> {item.name}</p>
                        <button onClick={()=>handleCountVal(item, true)}>+</button>
                        <p>Count:{item.count}</p>
                        <button onClick={()=>handleCountVal(item, false)}>-</button>
                        <p>Price:{item.price}</p>
                        <button onClick={()=>handlleBasketDelete(item._id)}>x</button>
                        <p>Total:{item.total}$</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Basket