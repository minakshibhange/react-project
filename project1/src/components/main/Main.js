import React from "react";
import './Main.css';
import {Routes} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import AboutUs from "../aboutus/AboutUs";
import Career from "../career/Career";
import NotFound from "../notfound/NotFound";
import ProductList1 from "../productlist/ProductList1";
import ProductDetails from "../productlist/ProductDetails";
// import AjaxDemo4 from "../ajax/AjaxDemo4";
// import AjaxDemo5 from "../ajax/AjaxDemo5";
// import AjaxDemo6 from "../ajax/AjaxDemo6";
// import AjaxDemo1 from "../ajax/AjaxDemo1";
// import AjaxDemo2 from "../ajax/AjaxDemo2";
// import AjaxDemo3 from "../ajax/AjaxDemo3";
// import FormValidation from "../form/FormValidation";
// import FormDemo2 from "../form/FormDemo2";
// import FormDemo3 from "../form/FormDemo3";
// import FormDemo from "../form/FormDemo";
// import GetSnapshotDemo1 from "../hooks/GetSnapshotDemo1";
// import UseRefDemo1 from "../hooks/UseRefDemo1";
// import UseRefDemo2 from "../hooks/UseRefDemo2";
// import UseEffectDemo1 from "../hooks/UseEffectDemo1";
// import LifeCycleDemo1 from "../LifeCycleHooks/LifeCycleDemo1";
// import ClickCounterWithHOC from "../hoc/ClickCounterWithHOC";
// import HoverCounterWithHOC from "../hoc/HoverCounterWithHOC";
// import ClickCounter from "./hoc/ClickCounter";
// import HoverCounter from "./hoc/HoverCounter";
// import MemoDemo1 from "../memo/MemoDemo1";
// import EventsHandler from "../event/EventsHandler";
// import ListDemo1 from "../listItem/ListDemo1";
// import ListDemo2 from "../listItem/ListDemo2";
// import ModalAlert from "../state/ModalAlert";
// import SearchDemo1 from "../state/SearchDemo1";



export default class Main extends React.Component {
  state = {flag:true};
  render() {
    return (
      <div className="main">
        {/* <ListDemo2></ListDemo2> */}
        {/* <ListDemo1></ListDemo1> */}
        {/* <ModalAlert></ModalAlert> */}
        {/* <SearchDemo1></SearchDemo1> */}
        {/* <EventsHandler></EventsHandler> */}
        {/* <MemoDemo1></MemoDemo1> */}
         {/* <ClickCounter></ClickCounter>
      <br></br>
        =================================

        <HoverCounter></HoverCounter> */}
        
        {/* <ClickCounterWithHOC></ClickCounterWithHOC>
        <br></br>
        ===============================
        <HoverCounterWithHOC></HoverCounterWithHOC> */}

        {/* <LifeCycleDemo1></LifeCycleDemo1> */}
        {/* {this.state.flag ? <UseEffectDemo1 /> : null}
        <button onClick={()=>this.setState({flag: !this.state.flag})}>Click Me</button> */}
        {/* <GetSnapshotDemo1></GetSnapshotDemo1> */}
        {/* <UseRefDemo1></UseRefDemo1> */}
        {/* <UseRefDemo2></UseRefDemo2> */}
      {/* <FormDemo></FormDemo> */}
      {/* <FormDemo2></FormDemo2> */}
      {/* <FormDemo3></FormDemo3> */}
      {/* <FormValidation></FormValidation> */}
      {/* <AjaxDemo1></AjaxDemo1> */}
      {/* <AjaxDemo2></AjaxDemo2> */}
      {/* <AjaxDemo3></AjaxDemo3> */}
      {/* <AjaxDemo4></AjaxDemo4> */}
      {/* <AjaxDemo5></AjaxDemo5> */}
      {/* <AjaxDemo6></AjaxDemo6> */}

      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/productlist" element={<ProductList1 />} />
        <Route exact path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} /> (No Match Route)
      </Routes>
      </div>
    );
  }
}
