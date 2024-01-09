import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { BasketContext } from '../../context/basketContext';
import { WishlistContext } from '../../context/wishlistContext';
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

function Card() {

    const { handleAddBasket } = useContext(BasketContext)
    const { handleAddWishlist, wishlist } = useContext(WishlistContext)

    const [card, setCard] = useState('')

    async function AxiosCard() {
        const res = await axios.get('http://localhost:3000/product')
        setCard(res.data)
    }

    async function CartDeleted(_id) {
        await axios.delete(`http://localhost:3000/product/${_id}`)
        AxiosCard()
    }
    console.log(CartDeleted);
    useEffect(() => {
        AxiosCard()

    }, [])


    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {
                card && card.map((item) => (
                    <div style={{ border: "1px solid black", padding: "20px" }} >
                        <Link to={`/detail/${item._id}`}>
                            <img src={item.image} alt="" style={{ maxWidth: "100px" }} />
                        </Link>
                        <p>{item.name}</p>
                        <p>{item.price}$</p>
                        <button onClick={() => CartDeleted(item._id)}>x</button>
                        <button onClick={() => handleAddBasket(item)}>Add basket</button>
                        <button onClick={() => handleAddWishlist(item)}>
                            {
                                wishlist.find((x)=>x._id === item._id)
                                    ?
                                    <GoHeartFill />
                                    :
                                    <GoHeart />
                            }</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Card