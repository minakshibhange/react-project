import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, [id]);

    const getProducts = () => {
        fetch("https://fakestoreapi.com/products/${id}").then((response) => response.json())
            .then((product) => setProduct(product));
        };
  return (
    <>
               
       <h3>Product Details</h3> 
       <div className="container">
            <div className="row">
                    {product.map(pro =>(
                            <div className="col-sm-3">
                                <div className="card rounded shadow-sm" key={pro.id}> 
                                 <img src={pro.image} alt='' height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{pro.price}</h5>
                                        <p className="card-text">{pro.category}</p>
                                        <p className='card-text'>{pro.title}</p>
                                    </div>
                                </div> 
                            </div>
                        ))
                    }     
            </div>
        </div>
    </>
  );
}
