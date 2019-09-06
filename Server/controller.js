module.exports = {
    addProduct: (req, res) => {
        const dbInstance = req.app.get('ab');
        const {name, price, image} = req.body

        dbInstance.add_product([name, price, image])
        .then (() => res.sendStatus(200))
        .catch (err => {
            res.status(500).send({errorMessage: " NO NO NO"})
            console.log(err)
        })
    },
    
    getProducts: (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.get_products()
    .then(products => res.status(200).send(products))
    .catch (err => {
        res.status(500).send({errorMessage: "Nope not working"})
        console.log(err)
    })
    
    }

}