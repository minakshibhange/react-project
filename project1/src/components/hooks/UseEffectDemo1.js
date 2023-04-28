import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UseEffectDemo1() {
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [c, setC] = useState(30);
    useEffect(() => {
        console.log("use-effect called..");
        return () =>{
            console.log("componentwillunmount.....");
        };
    },[a,b]);

    console.log("rendered.....");
    return (
        <>
            <div>UseEffectDemo1</div>
            <h2>A value is {a}</h2>
            <h2>A value is {b}</h2>
            <h2>A value is {c}</h2>
            <button onClick={()=>setA(a+1)}>Update-A</button>
            <button onClick={()=>setB(b+1)}>Update-B</button>
            <button onClick={()=>setC(c+1)}>Update-C</button>
        </>
    );
}
