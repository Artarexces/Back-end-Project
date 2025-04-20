import { connectDB } from "./config/mongoose"
import { createProduct, getProducts, getProductsById, updateProduct, deletProduct } from "./Controllers/productsControllers"



connectDB()

const runExample = async () => { 

// const cProduct = await createProduct({
//     prod:"teclado plano",
//     type:"electronico",
//     size:18,
//     zone:"villa grande",
//     price: 11000,
//     available: true
//      }); 

const gProducts = await getProducts()

const gProcductsId = await getProductsById('6804510931e6b8d5a68ac584') 

// const uProduct = await updateProduct('680450ecff3a9d345bf4351a', {zone: "adrogue"})

// const dProduct = await deletProduct('680450aaa1f4175182591c94')
// console.log(dProduct)



}


// Prueba de funciones


runExample()
