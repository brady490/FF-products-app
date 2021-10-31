const http = require('http');
const express = require('express');
const cors = require('cors');
const corsOption = {
    orgin: 'http://localhost:3000'
}

const apiapp = express();
apiapp.use(cors(corsOption));

const productsArray = require('./data/products.json');

// GET a list of all products
apiapp.get('/products', (req, res) => {
    // logic
    res.json(productsArray);
});

// GET a product by id
apiapp.get('/products/:prodId', (req, res) => {
    const productId = req.params.prodId;
    const foundItem = productsArray.find((item) => {
        return (item.id == productId);
    });
    res.json(foundItem);
});

var httpapp = http.createServer(apiapp).listen(8001);
// function (req, res) {
//     res.write("Hello world");
//     res.end();
// }

httpapp.on('listening', () => {
    console.log('our server is up at 8001 listening');
});
