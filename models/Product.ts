import mongoose,{Document, Schema, model} from "mongoose";


//Interface que agrega _id y createdAt 
interface ProductInterface extends Document{
    prod: string
    type: string 
    size: number
    zone?: string
    price: number
    available: boolean
    createdAt: Date
}


//Interface que para crud (sin _id y createdAt)  
interface ProductInput {
    prod: string
    type: string 
    size: number
    zone?: string
    price: number
    available: boolean
}

//Schema del producto.

const productSchema: Schema = new Schema<ProductInterface>({
    prod:{ type: String, required: true },
    type:{ type: String, required: true },
    size:{ type: Number, required: true },
    zone:{ type: String, required: false},
    price:{ type: Number, required: true },
    available:{ type: Boolean, required: true },
    createdAt:{ type: Date, default: Date.now}
})


//Uso estricto del schema 

productSchema.set("strict", true)

const ProductModel = model<ProductInput>("product", productSchema)


export{ ProductInput, ProductInterface, ProductModel }