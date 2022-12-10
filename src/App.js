import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.css"
import { useState } from "react";


function App() {
  // cart number will apear in header on all pages
  const [cartTotal, setCartTotal] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home cartTotal = {cartTotal}/>} />
        <Route path='/shop' element={<Shop cartTotal = {cartTotal} setCartTotal = {setCartTotal}/>} />
        <Route path='/cart' element={<Cart cartTotal = {cartTotal}/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
