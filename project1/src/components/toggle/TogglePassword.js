
// This is

// import React, { useState } from 'react'

// export default function TogglePassword() {
//     const [flag, setFlag] = useState(true);
//     const toggleFlag = () =>{
//         setFlag(!flag)  
//     }
//   return (
//     <div>
//         <input type={flag ? "password" : "text"}></input> <br/>
//         <button onClick={toggleFlag}> Toggle password </button>
//     </div>
//   )
// }


// Class Component below
import React, { Component } from 'react'

export default class TogglePassword extends Component {
    state ={
        flag: true
    }
    flagToggle = () =>{
        this.setState({flag: !this.state.flag})
    };
  render() {
    return (
      <>
      <input type={this.state.flag ? "password" : "text"}></input>
      <button onClick={this.flagToggle}>Toggle password</button>
      </>
    )
  }
}
