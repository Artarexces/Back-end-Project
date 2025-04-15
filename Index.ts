import mongoose,{Document, Schema, model} from "mongoose";
import { connectDB } from "./config/mongoose";

connectDB()

//Interface 

interface Product extends Document{
    prod: string
    type: string 
    size: number
    zone?: string
    price: number
    available: boolean
    createdAt: Date
}

//Schema del producto.

const productSchema: Schema = new Schema<Product>({
    prod:{ type: String, required: true },
    type:{ type: String, required: true },
    size:{ type: Number, required: true },
    zone:{ type: String, required: false},
    price:{ type: Number, required: true },
    available:{ type: Boolean, required: true },
    createdAt:{ type: Date, default: Date.now}
})

productSchema.set("strict", true)

const Product = mongoose.model("product", productSchema)





//Functions: 


const getProducts = async () => {
    try {
        const products = await Product.find()
        console.log("All products: ", Product)
    } catch (error) {
        console.log("Error getting products...", error)
    }
}

const getProductsById = async (id: any) => {
    try {
        const product = await Product.findById(id)
        console.log("Product found:", product)
    } catch (error) {
        console.log("Error getting product...", error)
    }
}


