import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: String,
    image: String
});

export const Product = mongoose.model('Product', ProductSchema);