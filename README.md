# 📦 Proyecto Back-End Abril

Aplicación Back-End desarrollada con **TypeScript** y **MongoDB** utilizando **Mongoose** como ODM. Este proyecto permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de productos.

---

## 📁 Estructura del Proyecto

- proyecto-abril/
  - config/
    - mongoose.ts
  - controllers/
    - productsControllers.ts
  - models/
    - Product.ts
  - .env
  - .env.example
  - .gitignore
  - index.ts
  - package.json
  - package-lock.json
  - tsconfig.json

  
---

## 📌 Dependencias Principales

- **TypeScript**
- **Mongoose**
- **Dotenv**
- **ts-node-dev** (para entorno de desarrollo)

---

## ⚙️ Configuración Inicial

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Artarexces/Back-end-Project
   cd proyecto-abril

2. Instala dependencias :
   ```bash
   npm install

3. Crea un archivo **.env** siguiendo el formato de **.env.example** y agrega tu URI de conexión a MongoDB:

   URI_DB=mongodb://localhost:tuhost/ProyectApril

---

## 📝 Scripts Disponibles

El archivo `package.json` contiene los siguientes scripts para facilitar la ejecución del proyecto desde la terminal:

json 

**scripts**
  
  **start**: tsc && node ./dist/index.js
  
  **dev**: ts-node-dev --respawn index.ts
  
  **build**: tsc


- **npm run start** → Compila el proyecto y ejecuta el archivo `index.js` desde la carpeta `src`.

- **npm run dev** → Ejecuta el proyecto en modo desarrollo con `ts-node-dev`, reiniciando automáticamente al detectar cambios.

- **npm run build** → Compila todos los archivos TypeScript y genera la carpeta `dist`.

---

## 📖 Descripción de Funcionalidades

- 📄 **index.ts**
  - Conecta a la base de datos.
  - Ejecuta una función de prueba `runExample()` que utiliza las funciones CRUD del controlador.

- 📄 **productsControllers.ts**
  - Controlador con funciones asíncronas para:
    - `createProduct(data)` → Crea un nuevo producto.
    - `getProducts()` → Obtiene todos los productos.
    - `getProductsById(id)` → Obtiene un producto por ID.
    - `updateProduct(id, newData)` → Actualiza un producto por ID.
    - `deletProduct(id)` → Elimina un producto por ID.

- 📄 **Product.ts**
  - Modelo y esquemas de productos con:
    - Interfaces `ProductInterface` y `ProductInput`.
    - Esquema Mongoose con campos:
      - `prod` (string)
      - `type` (string)
      - `size` (number)
      - `zone` (string)
      - `price` (number)
      - `available` (boolean, opcional, default `true`)
      - `createdAt` (date, default fecha actual)
    - Modelo `ProductModel`.

---

## 🚀 Cómo Probar

- En `index.ts` se encuentra una función de ejemplo llamada `runExample()` que:
  - Crea un producto.
  - Obtiene todos los productos.
  - Busca un producto por ID.
  - Actualiza un producto por ID.
  - Elimina un producto por ID.
- Puedes personalizar los valores de prueba y los ID según lo necesites para hacer tus pruebas desde la terminal.

---

## 📌 Notas

- Este proyecto es un entorno de pruebas para aprender sobre la conexión a **MongoDB** y operaciones CRUD usando **Mongoose** en **TypeScript**.
- Las respuestas de las funciones son mensajes por consola para fines de desarrollo.

## Notas para los profes 

-La verdad que aprendi muchisimo en este proyecto, quise apuntar a mas agregandole un cli, pero preferi pulir lo que ya tenia desarollado, desde ya muchas gracias por su tiempo! 
