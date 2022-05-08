import logo from './logo.svg';
import{Routes,Route}from"react-router-dom";
import {About}from "./components/About";
import {Footer}from "./components/new";
import {Product}from "./components/Product/Product";
import {Productdetail}from "./components/Product/Productdetail";
import {Navbar}from "./components/Navbar";
import {Healthdata}from "./components/Product/Healthdata";
import {Oralcaredata}from "./components/Product/Oralcaredata";
import {Bodycaredata}from "./components/Product/Bodycaredata";
import {Bodycaredetail}from "./components/Product/Bodycaredetail";
import {Healthdetail}from "./components/Product/Healthdetail";
import {Oralcaredetail}from "./components/Product/Oralcaredetail";
function App() {
  return (
    <div className="App">
      {/* <About/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product/>}></Route>
        <Route path="/products/:id" element={<Productdetail/>} ></Route>
        <Route path="/health" element={<Healthdata/>}></Route>
        <Route path="/bodycare" element={<Bodycaredata/>}></Route>
        <Route path="/oralcare" element={<Oralcaredata/>}></Route>
        <Route path="/health:id" element={<Healthdetail/>}></Route>
        <Route path="/bodycare:id" element={<Bodycaredetail/>}></Route>
        <Route path="/oralcare:id" element={<Oralcaredetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
