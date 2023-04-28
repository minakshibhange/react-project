import React from 'react'
import CounterHOC from './CounterHOC';

function HoverCounterWithHOC(props) {
  return (
    <>
    <button onMouseOver={props.increment}> Mouse Hover {props.count} Times</button>
</>
  );
}
export default CounterHOC(HoverCounterWithHOC);