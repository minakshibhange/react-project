import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
// import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import { myInterceptor } from './components/ajax/MyInterceptor1';
// import ModalAlert from './components/state/ModalAlert';
// import JsonCard from './components/jsoncard/JsonCard';
// import LocalVariableDemo1 from './components/props/LocalVariableDemo1';
// import LocalVariableDemo2 from './components/props/LocalVariableDemo2';
// import Toggle from './components/toggle/Toggle';

// import TogglePassword from './components/toggle/TogglePassword';
// import SweetAlert from './components/state/SweetAlert';

function App() {
  myInterceptor();
    return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Main></Main>
     {/*  <Card></Card> */}
      {/* <JsonCard></JsonCard> */}
      {/* <LocalVariableDemo1></LocalVariableDemo1> */}
      {/* <LocalVariableDemo2></LocalVariableDemo2> */}
      {/* <Toggle></Toggle> */}
      {/* <TogglePassword></TogglePassword> */}
      {/* <SweetAlert></SweetAlert> */}
      {/* <ModalAlert></ModalAlert> */}
      <Footer></Footer>
    </div>
    );
}

export default App;
