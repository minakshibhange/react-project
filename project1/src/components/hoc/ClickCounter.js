import React, { useState } from 'react'

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount (count+1);
  };
  return (
    <>
     <p>count is: {count}</p>
     <button onClick={increment}>increment</button>
    </>
  );
}

