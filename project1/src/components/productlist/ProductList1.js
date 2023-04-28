import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList1() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    });
    const getUsers = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((users) => setUsers(users));

    };
  return (
    <>
        <h2 className='text-center bg-primary text-white'> Product List </h2>
        <div className="container">
            <div className="row">
                    {users.map(user =>(
                            <div className="col-sm-3">
                                <div className="card rounded shadow-sm" key={user.id}> 
                                 <img src={user.image} alt='' height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.price}</h5>
                                        <p className="card-text">{user.category}</p>
                                        <p className='card-text'>{user.title}</p>
                                        <p className='card-text'>
                                            <button> <Link to={`/productdetails/${user.id}`}> View Details</Link></button>
                                        </p>

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
