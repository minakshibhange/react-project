import React from 'react'

export default function UserCard({user}) {
    const {name, username, email, address} = user;
  return (
    <div className="card json-card">
                <img src="https://media.istockphoto.com/id/530415442/vector/vector-user-icon-of-man-in-business-suit.jpg?s=612x612&w=0&k=20&c=8JUfx7FgwPa-q2nRqMfop7FsIKIqRnKySX9BzPaMNSw=" className="card-img-top" alt="card-image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">userName: {username} </p>
                    <p className="card-text">Email: {email} </p>
                    <p className="card-text">Address: {address.city} </p>
                </div>
                </div>
  );
}
