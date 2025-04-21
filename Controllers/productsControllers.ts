import { ProductInput ,ProductModel } from "../models/Product"

//Funcion para crear producto

const createProduct = async (data: ProductInput) => {
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

//Funcion para obtener todos los productos

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

//Funcion para obtener productos por su ID

const getProductsById = async (id: string) => {
    try {
        const product = await ProductModel.findById(id)
        console.log("Producto encontrado por id:", product)
        return "Producto encontrado correctamente"
    } catch (error) {
        console.error("Error al obtener producto:", error)
        return "Error al obtener producto"
    }
}

//Funcion para actualizar productos

const updateProduct = async (id: string, newData:Partial<ProductInput>) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, newData, {new:true})
        console.log("Producto actualizado", updatedProduct)
        return "Producto actualizado correctamente"
    } catch (error) {
        console.error("Error al actualizar producto", error)
        return "Error al actualizar producto"
    }
}

//Funcion para eliminar productos

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


export { createProduct, getProducts, getProductsById, updateProduct, deletProduct }