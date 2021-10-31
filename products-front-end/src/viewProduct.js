import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

function ViewProduct() {
    const pageParams = useParams();
    const productId = pageParams.productId;

    const [productItem, setProductItem] = useState({});

    const apiendpoint = `http://localhost:8001/products/${productId}`;
    // component is mounted
    useEffect(() => {
        fetch(apiendpoint)
            .then((res) => res.json())
            .then((data) => {
                console.log('product by id from server', data);
                setProductItem(data);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <img src={productItem.image} style={{height: 250, width: 250}}></img>
            <p>
                Name: {productItem.name}
            </p>
            <p>
                Category: {productItem.category}
            </p>
            <p>
                Actual Price: {productItem.actualPrice}
            </p>
            <p>
                Sales Price: {productItem.salesPrice}
            </p>
        </div>
    )
}
export default ViewProduct;