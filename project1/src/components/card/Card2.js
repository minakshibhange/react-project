import React from 'react'

export default function Card2() {
    var sampleArray = [
        {
            ids: 1,
            name: 'David',
            age: 18,
            profle_pic: 'https://images.unsplash.com/photo-1653769991640-db35dfeeae6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            ids: 2,
            name: 'John',
            age: 23,
            profle_pic: 'https://images.unsplash.com/photo-1674938290108-774c5ac81d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            ids: 3,
            name: 'Christ',
            age: 15,
            profle_pic: 'https://images.unsplash.com/photo-1674676618152-76bef3a8c639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            ids: 4,
            name: 'Rock',
            age: 25,
            profle_pic: 'https://images.unsplash.com/photo-1674634099070-b25d16eb92d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }

    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    {sampleArray.map((pro, ind) => (
                        <ul className="list-unstyled">
                            <li> <span> <img src={pro.profle_pic} alt='' height="150px" width="150px" className='rounded-pill' /> </span></li>
                            <li> <span> {pro.ids} </span> </li>
                            <li> <span> {pro.name} </span> </li>
                            <li> <span> {pro.age} </span> </li>
                        </ul>
                    ))
                    }

                </div>
            </div>
        </>
    );
};
