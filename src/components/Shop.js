import "../style/shop.css"
import MaterialIcon from 'material-icons-react';

import { useState } from "react";
import { products } from "../products";
import AmountAdjust from "./AmountAdjust";

const Shop = ({cartTotal, setCartTotal, cart, setCart}) => {

    // The object consists of the product id to its amount - {id: amount, id: amount, ...}
    // this is to keep track of the user entered product amount
    // Initially all products have an amount of 0
    const [productAmount, setProductAmount] = useState(products.reduce((obj, product) => {
        obj[product.id] = '';
        return obj;
    }, {}))

    const handleAmountChange = (prodId, e) => {
        const input = e.target.value;
        if(!isNaN(input)) {
            setProductAmount({...productAmount, [prodId]: e.target.value})
        }
    }

    const handleAmountInc = (prodId, e) => {
        setProductAmount({...productAmount, [prodId]: +productAmount[prodId] + 1})

    }

    const handleAmountDec = (prodId, e) => {
        if (+productAmount[prodId] > 0) {
            setProductAmount({...productAmount, [prodId]: +productAmount[prodId] - 1})
        }

    }

    const handleAddToCart = (prodId, e) => {
        if (+productAmount[prodId] === 0) {
            return;
        }
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
        <div className="container" data-testid="shop">
            <div className="products">
                {
                    products.map( product => (
                        <div key={product.id} data-testid="product">
                            <img src={product.image} alt=""></img>
                            <div className="title">{product.title} </div>
                            <div className="price">${product.price}</div>
                            <div className="ops">
                                <AmountAdjust productId = {product.id} amount = {productAmount[product.id]}
                                                handleAmountChange = { handleAmountChange }
                                                handleAmountDec = { handleAmountDec } 
                                                handleAmountInc = { handleAmountInc }/>
                                <div className="icon" onClick={handleAddToCart.bind(null, product.id)} data-testid="add-to-cart">
                                    <MaterialIcon icon="add_shopping_cart" size={25} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop;