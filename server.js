const express = require('express')
const connectToDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const dotenv = require('dotenv')
const colors=require('colors')
const {notFound,errorHandler}=require('./middleware/errorMiddleware')
dotenv.config();
const app = express();
connectToDB()
app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)
app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`.cyan.underline))
