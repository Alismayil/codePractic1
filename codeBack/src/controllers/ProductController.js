import { Product } from "../models/ProdcutModels.js"

export const GetAllProduct = async (req, res) => {
    const data = await Product.find({})
    res.send(data)
}

export const GetByIdProduct =  async (req, res) => {
    try {
     const {id}=req.params
     const data = await Product.findById(id).exec();
     res.send(data)
    } catch (error) {
     res.status(404).send(error)
    }
 }

 export const ProductDelete = async (req, res) => {
    try {
        const {id}=req.params
        const data = await Product.findByIdAndDelete(id).exec();
        res.status(200).send("Product deleted")
    } catch (error) {
        res.status(404).send("Product not deleted")

    }
}

export const ProductPost = async (req, res) => {
    try {
        const data = new Product(req.body)
        await data.save()
        res.status(200).send("Product created")
    } catch (error) {
        res.status(404).send("Product not created")

    }
}