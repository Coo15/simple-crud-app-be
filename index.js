const express = require("express")
const mongoose = require('mongoose')
const Product = require('./models/product.models')
const productRoute = require('./routes/product.route')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use("/api/products", productRoute)


app.get('/', (req, res) => {
    res.send('Hello from Node API Server')
})



mongoose.connect('mongodb+srv://quangminhdao24:lbtUEANx85z3IfAm@backenddb.bjmcd.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database!')
        app.listen(8000, () => {
            console.log("Server is running on port 8000")
        })
    })
    .catch(() => {
        console.log("Failed to connect to database!")
    })