import React from 'react'
import { useState } from 'react';
export default function Toggle() {
    const [flag, setFlag] = useState(true);
    const para = () =>{
        setFlag(!flag);
    };
    return (<>
        <button onClick={para} class="btn btn-primary mb-5">
            Toggle State
        </button>
        {flag ? <p> This is paragraph</p>: null}
    </>
    );
}

