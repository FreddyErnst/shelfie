require('dotenv').config()
const express = require("express");
const app = express();
const port = 6000;
const controller  = require("./controller")
const massive = require("massive")

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).
then(dbInstance => {
    app.set('db', dbInstance)
})
.catch(err => console.log(err))

app.use(express.json())

app.post("api/products", controller.addProduct)
app.get("api/products", controller.getProducts)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})