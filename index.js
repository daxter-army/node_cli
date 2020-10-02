require('./db/mongoose')
const Product = require('./models/product')

// add a product
const addProduct = (product) => {
    const item = new Product(product)
    
    item.save()
    .then(() => {
        console.info('Product added!')
        // to exit
        process.exit(0)
    })
    .catch((e) => {
        console.error('Something unexpected happened... Try again!')
        process.exit(1)
    })
}

// find a product
const findProduct = (itemName) => {
    const search = new RegExp(itemName, 'i')

    Product.find({productName: search}).then((item) => {
        if(!item) {
            console.info('No results found!')
            process.exit(0)
        }
        else {
            console.info(item)
            console.info(`${item.length} matches`)
            process.exit(0)
        }
    })
    .catch((e) => {
        console.error('Something unexpected happened... Try again!')
        process.exit(1)
    })

    return true
}

// update a product
const updateProduct = (_id, product) => {
    Product.updateOne({_id}, product).then(() => {
        console.info('Product updated!')
        process.exit(0)
    })
    .catch((e) => {
        console.error('Something unexpected happened... Try again!')
        process.exit(1)
    })
}

// remove a product
const removeProduct = (_id) => {
    Product.deleteOne({_id}).then(() => {
        console.info("Product removed!")
        process.exit(0)
    })
    .catch((e) => {
        console.error('Something unexpected happened... Try again!')
        process.exit(1)
    })
}

// list all products
const listProducts = () => {
    Product.find().then((results) => {
        if(!results) {
            console.info('No results found!')
            process.exit(0)
        }
        else {
            console.info(results)
            console.info(`${results.length} products`)
            process.exit(0)
        }
    })
    .catch((e) => {
        console.error('Something unexpected happened... Try again!')
        process.exit(1)
    })
}

module.exports = {
    addProduct,
    findProduct,
    updateProduct,
    removeProduct,
    listProducts
}