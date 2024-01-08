import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import { ProductRoter } from './src/router/ProductRouter.js';

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use("/product", ProductRoter)

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})