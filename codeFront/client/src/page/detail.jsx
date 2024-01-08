import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();

    const [product, setProduct] = useState()

    async function detailFunc() {
        const res = await axios.get(`http://localhost:3000/product/${id}`)
        setProduct(res.data)
    }

    useEffect(() => {
        detailFunc()
    }, [])


    return (
        <div>
            {product ?
                <>
                    <img src={product.image} alt="" />
                    <p>{product.name}</p>
                </> :
                ""}

        </div>
    )
}

export default Detail