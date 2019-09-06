require('dotenv').config()
const express = require("express");
const app = express();
const port = 5050;
const controller  = require("./controller")
const massive = require("massive")

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).
then(dbInstance => {
    app.set('db', dbInstance)
})
.catch(err => console.log(err))

app.use(express.json())

app.post("/api/inventory", controller.addProduct)
app.get("/api/inventory", controller.getProducts)
app.delete("/api/inventory/:id", controller.deleteProduct)


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})