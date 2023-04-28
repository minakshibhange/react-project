import React, { Component } from 'react';

export default class LifeCycleDemo2 extends Component {
  render() {
    return (
      <div>LifeCycleDemo2</div>
    )
  }
  componentWillUnmount(){
    console.log(
        "Component LifeCycleDemo2 is about to be removed, please do the clean up "
    );
  }
}
