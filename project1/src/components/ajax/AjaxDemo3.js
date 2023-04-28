import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AjaxDemo3() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    });

    // const getProducts = () => {
    //     axios.get("https://fakestoreapi.com/products").then((response) => {
    //         console.log(response);
    //         setProduct(response.data)
    //     });
    // }
    const getProducts = () => {
        fetch("https://fakestoreapi.com/products").then((response) => response.json())
            .then((products) => setProduct(products));
        };


    return (
        <>
       
       <h3>AjaxDemo3</h3> 
       <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>category</th>
                <th>image</th>
                <th>rating</th>
            </tr>
        </thead>
        <tbody>
        {products.map(product =>(
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img src={product.image} height="100px" /></td>
                
                <td>{product.rating.rate}</td>
            </tr>
        ))}
        </tbody>
       </table>
        
        </>
    );
}
