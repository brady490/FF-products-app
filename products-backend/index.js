const http = require('http');
const express = require('express');
const fs = require('fs');

const cors = require('cors');
const corsOption = {
    orgin: 'http://localhost:3000'
}

const bodyParser = require('body-parser')

const apiapp = express();
apiapp.use(cors(corsOption));
apiapp.use(bodyParser.json())

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

// POST - save a new product into json file
apiapp.post('/products', (req, res) => {
    const productItem = req.body;
    console.log('into POST', productItem);

    // push the new product item into array 
    var arrlength = productsArray.length;
    var lastItem = productsArray[arrlength - 1];
    productItem.id = lastItem.id + 1;
    productsArray.push(productItem);


    // write the file with new array, sync 
    fs.writeFileSync('./data/products.json', JSON.stringify(productsArray));

    // async 
    // mysqldb.products.create(productItem, (err, res) => {
    //     res.status(201).send({ message: "Successfully created a new product" });
    // })

    res.status(201).send({ message: "Successfully created a new product" });
});

var httpapp = http.createServer(apiapp).listen(8001);
// function (req, res) {
//     res.write("Hello world");
//     res.end();
// }

httpapp.on('listening', () => {
    console.log('our server is up at 8001 listening');
});
