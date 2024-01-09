import express from 'express'
import { GetAllProduct, GetByIdProduct, ProdcutUpdate, ProductDelete, ProductPost } from '../controllers/ProductController.js'
import { Product } from '../models/ProdcutModels.js'

export const ProductRoter=express.Router()

ProductRoter.get('/',GetAllProduct )

ProductRoter.get('/:id',GetByIdProduct )

 ProductRoter.post('/', ProductPost )

ProductRoter.delete('/:id',ProductDelete )

ProductRoter.put('/:id',ProdcutUpdate )