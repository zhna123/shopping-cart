import Footer from "./Footer";
import Header from "./Header";
import "../style/shop.css"
import MaterialIcon from 'material-icons-react';

import { useState } from "react";
import { products } from "../products";

const Shop = ({cartTotal, setCartTotal}) => {

    // Map - map all the product Ids to amount 
    const [productAmount, setProductAmount] = useState(new Map(products.map((item) => [item.id, 0])))
    // cart state - map added product to amount; empty initially
    const [cart, setCart] = useState(new Map())
    // const [cartTotal, setCartTotal] = useState(0)

    const handleAmountChange = (prodId, e) => {
        setProductAmount(new Map(productAmount.set(prodId, e.target.value)))
    }

    const handleAmountInc = (prodId, e) => {
        setProductAmount(new Map(productAmount.set(prodId, +productAmount.get(prodId) + 1)))
    }

    const handleAddToCart = (prod, e) => {
        setCart(new Map(cart.set(prod, productAmount.get(prod.id))))
        setCartTotal(cartTotal + productAmount.get(prod.id))
        // reset product amount
        setProductAmount(new Map(productAmount.set(prod.id, 0)))
    }

    return (
        <div className="container">
            <Header cartTotal={cartTotal} />
            <div className="products">
                {
                    products.map( product => (
                        <div key={product.id}>
                            <img src={product.image} alt=""></img>
                            <div className="title">{product.title} </div>
                            <div className="price">{product.price}</div>
                            <div className="ops">
                                <div className="amount">

                                    <div className="icon" >
                                        <MaterialIcon icon="remove" size={20}/>
                                    </div>
                                    <input type='text' id="amnt" value={productAmount.get(product.id)} onChange={handleAmountChange.bind(null, product.id)}></input>
                                    <div className="icon" onClick={handleAmountInc.bind(null, product.id)}>
                                        <MaterialIcon icon="add" size={20}/>
                                    </div>
                            
                                </div>
                                <div className="icon" onClick={handleAddToCart.bind(null, product)}>
                                    <MaterialIcon icon="add_shopping_cart" size={25} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Shop;