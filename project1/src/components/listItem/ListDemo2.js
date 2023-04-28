import React from 'react'

export default function ListDemo2() {
    const employees = [
            { eId: 104, name: "Sanjay", sal: 8000, gender: "male"}, 
            { eId: 104, name: "deepak", sal: 8000, gender: "male"},
            { eId: 103, name: "ranjan", sal: 7000, gender: "male"},
            { eId: 102, name: "manoj", sal: 9000, gender: "female"},
    ];
  return <>
        <h2 className='text-center'> Employees List </h2>
  
        <table className="table table-bordered table-striped">
            <thead>
               <tr>
               <th>Sr.No </th>
                <th>EId</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Gender</th>
               </tr>
            </thead>
            <tbody>
                {employees.map((emp,ind)=>(
                <tr key={emp.id}>
                    <td>{ind+1}</td>
                    <td>{emp.eId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.sal}</td>
                    <td>{emp.gender}</td>
                </tr>
                   
                ))
                }
            </tbody>
        </table>
       
    </>
}