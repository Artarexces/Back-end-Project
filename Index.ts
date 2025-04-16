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

const ProductModel = model<Product>("product", productSchema)




//Functions: 


const createProduct = async (data: Product) => {
    try {
        const newProduct = new ProductModel(data)
        await newProduct.save()
        console.log("Producto creado:", newProduct)
        return "Producto creado correctamente "
    } catch (error) {
        console.error("Error al crear producto:", error)
        return "Error al crear el producto "
    }
}



const getProducts = async () => {
    try {
        const products = await ProductModel.find()
        console.log("Todos los productos: ", products)
        return "Productos encontrados correctamente"
    } catch (error) {
        console.error("Error al obtener los productos:", error)
        return "Error al obtener los productos "
    }
}

const getProductsById = async (id: string) => {
    try {
        const product = await ProductModel.findById(id)
        console.log("Producto encontrado:", product)
        return "Producto encontrado correctamente"
    } catch (error) {
        console.error("Error al obtener producto:", error)
        return "Error al obtener producto"
    }
}


const updateProduct = async (id: string, newData:Partial<Product>) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, newData, {new:true})
        console.log("Producto actualizado", updatedProduct)
        return "Producto actualizado correctamente"
    } catch (error) {
        console.error("Error al actualizar producto", error)
        return "Error al actualizar producto"
    }
}

const deletProduct = async (id: string) => {
    try {
        await ProductModel.findByIdAndDelete(id)
        console.log("Producto eliminado", id)
        return "Producto eliminado correctamente"
    } catch (error) {
        console.error("Error al borrar producto", error)
        return "Error al borrar producto"
    }
}


