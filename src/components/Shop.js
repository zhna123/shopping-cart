import Footer from "./Footer";
import Header from "./Header";
import "../style/shop.css"
import MaterialIcon from 'material-icons-react';

import { useState } from "react";
import { products } from "../products";

const Shop = ({cartTotal, setCartTotal, cart, setCart}) => {

    // The object consists of the product id to its amount - {id: amount, id: amount, ...}
    // this is to keep track of the user entered product amount
    // Initially all products have an amount of 0
    const [productAmount, setProductAmount] = useState(products.reduce((obj, product) => {
        obj[product.id] = 0;
        return obj;
    }, {}))

    const handleAmountChange = (prodId, e) => {
        setProductAmount({...productAmount, [prodId]: e.target.value})
    }

    const handleAmountInc = (prodId, e) => {
        setProductAmount({...productAmount, [prodId]: +productAmount[prodId] + 1})

    }

    const handleAddToCart = (prodId, e) => {
        if (cart[prodId] > 0) {
            setCart({...cart, [prodId]: +productAmount[prodId] + cart[prodId]})
        } else {
            setCart({...cart, [prodId]: +productAmount[prodId]});
        }
        setCartTotal(cartTotal + +productAmount[prodId])
        // reset product amount
        setProductAmount({...productAmount, [prodId]: 0})
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
                            <div className="price">${product.price}</div>
                            <div className="ops">
                                <div className="amount">

                                    <div className="icon" >
                                        <MaterialIcon icon="remove" size={20}/>
                                    </div>
                                    <input type='text' id="amnt" value={productAmount[product.id]} onChange={handleAmountChange.bind(null, product.id)}></input>
                                    <div className="icon" onClick={handleAmountInc.bind(null, product.id)}>
                                        <MaterialIcon icon="add" size={20}/>
                                    </div>
                            
                                </div>
                                <div className="icon" onClick={handleAddToCart.bind(null, product.id)}>
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