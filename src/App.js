import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.css"
import { useState } from "react";


function App() {
  // cart number will apear in header on all pages
  const [cartTotal, setCartTotal] = useState(0)
  // cart state - product id to amount object
  // object consists of each product id to its amount - {product id: amount, product id: amount, ...}
  // empty object initially
  const [cart, setCart] = useState({})

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Home cartTotal = {cartTotal}/>} />
        <Route path='/shop' element={<Shop cartTotal = {cartTotal} setCartTotal = {setCartTotal}
                                            cart={cart} setCart={setCart}/>} />
        <Route path='/cart' element={<Cart cartTotal = {cartTotal} setCartTotal = {setCartTotal} 
                                            cart={cart} setCart={setCart}/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
