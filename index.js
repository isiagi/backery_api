require('./config/connect')
const express = require('express')
const product = require('./routers/product')

const app = express()

app.use(product)

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`we are up and running at ${PORT}`);
})