import React from 'react';
import Swal from 'sweetalert2';

export default function SweetAlert() {
    const f1 = () =>{
        alert("....");
    };
    const f2 = () =>{
        Swal.fire("The Title", "The message", "success");
    };
  return (
    <>
        <div>SweetAlert</div>
        <button onClick={f1}> click me</button>
        <button onClick={f2}> click me</button>
    </>
  );
}
