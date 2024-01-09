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
        <div className='basketCard' style={{border:"1px solid black", width:"200px", display:"flex", justifyContent:"center",
                    alignItems:"center", flexDirection:"column"}}>
            {product ?
                <>
                    <img src={product.image} alt="" style={{maxWidth:"100px"}} />
                    <p>{product.name}</p>
                </> :
                ""}

        </div>
    )
}

export default Detail