import React, { Component } from 'react';
import LifeCycleDemo2 from './LifeCycleDemo2';

export default class LifeCycleDemo1 extends Component {
    constructor(props) {
        console.log("I am constructor");
        super(props);
        this.state = {
            color: "red",
            flag:"true" ,
        };
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps called");
    //     return null;
    // }
    componentDidMount() {
        console.log("componentDidMount called");
        // document.getElementById('div1').innerText = "Something else....";
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate called");
        return null;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }
    render() {
        console.log("rendered called");
        return (
            <>
                <div style={{ color: this.state.color }}>LifeCycleDemo1</div>
                <p>This is a paragraph</p>
                <div id='div1'>My color is {this.state.color}</div>
                <button onClick={() => this.setState({ color: "yellow" })}>Change color</button>

                ======================================================================= <br/>
                <button onClick={() => this.setState({ flag: !this.state.flag })}>
                Change flag . {this.state.flag} </button>

                {this.state.flag ? <LifeCycleDemo2 /> : null}
            </>
        );
    }

}
