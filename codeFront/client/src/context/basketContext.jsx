import React, { createContext, useEffect, useState } from 'react'

export const BasketContext=createContext()

function BasketProvider({children}) {
const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [])

let subtotal=0
basket.forEach(element => {
    subtotal+=parseInt(element.total)
});

useEffect(() => {
 localStorage.setItem('basket', JSON.stringify(basket))
}, [basket])

    function handleAddBasket(x) {
        const basketProduct=basket.find((item)=>item._id === x._id)
        if (basketProduct) {
            basketProduct.count++
            basketProduct.total=basketProduct.count * parseInt(basketProduct.price)
        return
        }
        else{
            const total=x.price
        setBasket([...basket, {...x , count:1 , total:total}])
        }
    }
    function handleCountVal(x, isAdd) {
        const basketProduct=basket.find((item)=>item._id === x._id)
        const newbasket=basket
        if (isAdd) {
            basketProduct.count++
            basketProduct.total=basketProduct.count * parseInt(basketProduct.price)
        setBasket([...newbasket])
            
        }
        else{
            if (basketProduct.count === 1) {
                setBasket(basket.filter((item)=>item._id !== x._id))
            }
            else{
                basketProduct.count--
            basketProduct.total=basketProduct.count * parseInt(basketProduct.price)
                setBasket([...newbasket])
            }
            
        }
    }

    function handlleBasketDelete(_id) {
        setBasket(basket.filter((item)=>item._id !== _id))
    }
    const data={
        handleAddBasket,
        basket,
        setBasket,
        handleCountVal,
        handlleBasketDelete,
        subtotal
    }

  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider