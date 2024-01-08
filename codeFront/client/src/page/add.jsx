import React, { useState } from 'react'
import axios from "axios"

function Add() {

    const [name, setName] = useState([])
    const [price, setPrice] = useState([])
    const [image, setImage] = useState([])

    async function NewProduct() {
        await axios.post("http://localhost:3000/product", {
            name:name,
            price:price,
            image:image,
        })
    }

  return (
    <div>
        <form action=""  style={{display:'flex', flexDirection:"column", width:'200px'}}>
        <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='price' onChange={(e)=>setPrice(e.target.value)} />
        <input type="text" placeholder='image' onChange={(e)=>setImage(e.target.value)} />
        <button onClick={NewProduct}>add</button>
        </form>
    </div>
  )
}

export default Add