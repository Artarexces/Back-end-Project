import mongoose from "mongoose";

process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log("Conectado a mongoDB con exito.")
    } catch (error) {
        console.log(error, "no se pudo conectar a la base")
    }
}


export{ connectDB }