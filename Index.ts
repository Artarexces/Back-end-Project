import { connectDB } from "./config/mongoose"
import { createProduct, getProducts, getProductsById, updateProduct, deletProduct } from "./Controllers/productsControllers"

//Connexion a la base de datos...
connectDB()

const runExample = async () => { 

const cProduct = await createProduct({       // Crear productos
    prod:"",
    type:"",
    size:0,
    zone:"",
    price:0,

     }); 
console.log(cProduct)

const gProducts = await getProducts()       //Obtener productos
console.log(gProducts)

const gProcductsId = await getProductsById('')       //Obtener producto por su id
console.log(gProcductsId)

const uProduct = await updateProduct('', {})     //Actualizar producto
console.log(uProduct)

const dProduct = await deletProduct('')      //Eliminar producto por su id
console.log(dProduct)

}

runExample()
