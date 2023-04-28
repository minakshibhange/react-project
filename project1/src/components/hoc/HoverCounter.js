import React, {useState} from 'react';

export default function HoverCounter() {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount (count+1);
  };
  return (
    <>
     <p>count is: {count}</p>
     <button onMouseOver={increment}>increment</button>
    </>
  );
}