import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// function  definition
function ProductsList() {

    // const sampleData = [{
    //     "id": 1,
    //     "name": "p1",
    //     "category": "cat1",
    //     "availablity": true,
    //     "image": "https://m.media-amazon.com/images/I/51FGbb3EbgL._SY450_.jpg",
    //     "actualPrice": 100.01,
    //     "salesPrice": 99
    // }, {
    //     "id": 2,
    //     "name": "p2",
    //     "category": "cat2",
    //     "availablity": false,
    //     "image": "",
    //     "actualPrice": 1000,
    //     "salesPrice": 999
    // }, {
    //     "id": 3,
    //     "name": "p3",
    //     "category": "cat2",
    //     "availablity": false,
    //     "image": "",
    //     "actualPrice": 1000,
    //     "salesPrice": 999
    // }];

    const [products, setProducts] = useState([]);

    // component is mounted
    useEffect(() => {
        const apiendpoint = "http://localhost:8001/products";
        fetch(apiendpoint)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('products list: from server ', data);
                setProducts(data);
            })

        // console.log('th ', sampleData);
        // setProducts(sampleData);
    }, []);

    useEffect(() => {
        console.log('products changed', products);
    }, [products]);

    // logic
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <table style={{ width: '100%', height: '100%' }}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Availablity</td>
                        <td>Actual Price</td>
                        <td>Sales Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (<tr>
                                <td>{product.id}</td>
                                <td>
                                    <Link to={`/view/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </td>
                                <td>{product.category}</td>
                                <td>{product.availablity ? "In Stock" : "Out of stock"}</td>
                                <td>{product.actualPrice}</td>
                                <td>{product.salesPrice}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;