import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [])

    function handleAddWishlist(x) {
        const wishlistProduct=wishlist.find((item)=>item._id === x._id)
        if (wishlistProduct) {
            setWishlist(wishlist.filter((item)=>item._id !== x._id))
        return
        }
        else{
        setWishlist([...wishlist, {...x , count:1 }])
        }
    }
    function handleCountVal(x, isAdd) {
        const wishlistProduct=wishlist.find((item)=>item._id === x._id)
        const newWishlist=wishlist
        if (isAdd) {
            wishlistProduct.count++
            wishlistProduct.total=wishlistProduct.count * parseInt(wishlistProduct.price)
        setWishlist([...newWishlist])
            
        }
        else{
            if (wishlistProduct.count === 1) {
                setWishlist(wishlist.filter((item)=>item._id !== x._id))
            }
            else{
                wishlistProduct.count--
            wishlistProduct.total=wishlistProduct.count * parseInt(wishlistProduct.price)
                setWishlist([...newWishlist])
            }
            
        }
    }
    function handlleWishlistDelete(_id) {
        setWishlist(wishlist.filter((item)=>item._id !== _id))
    }

    useEffect(() => {
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])
    
    const data = {
        handleAddWishlist,
        wishlist,
        setWishlist,
        handleCountVal,
        handlleWishlistDelete
    }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider