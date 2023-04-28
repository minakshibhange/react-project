import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function GetSnapshotDemo1() {
    const [count, setCount] = useState(0);
    const myRef = useRef();    
    useEffect(() => {
      myRef.val = count;
    });
    return (
      <h1>
        Now: {count}, before: {myRef.val}
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
      </h1>
    );
}
