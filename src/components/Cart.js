import "../style/cart.css"

import { products } from '../products';
import MaterialIcon from 'material-icons-react';
import { useState } from 'react';
import AmountAdjust from './AmountAdjust';

const Cart = ({cartTotal, setCartTotal, cart, setCart}) => {

    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        // pass to backend
        // clean up
        setCart({})    
        setCartTotal(0);
        setSuccess(true);
    }

    const successMsg = "Thank you for submitting your order!"
    const emptyMsg = "Your cart is empty."
    
    return (
        <div className='container' data-testid="cart">
            <div className='cart_content'>
                { Object.keys(cart).length === 0 ? <div className='cart_msg'>{success ? successMsg : emptyMsg}</div> : 
                    (
                        Object.entries(cart).map(([key, value]) => {
                            return (
                                <CartItem key={key} productId={key} amount={value} 
                                        cart={cart} setCart={setCart} 
                                        cartTotal={cartTotal} setCartTotal={setCartTotal}/>
                            );
                        })
                    )
                }
            </div>
            { Object.keys(cart).length === 0 ? null : 
                <button className='submit' onClick={handleSubmit}>SUBMIT ORDER</button>
            }
        </div>
    )
}

const CartItem = ({productId, amount, cart, setCart, cartTotal, setCartTotal}) => {

    const [quantity, setQuantity] = useState(amount)

    const onDelete = () => {
        const {[productId]: _, ...rest} = cart;
        setCart(rest);
        setCartTotal(cartTotal - quantity)
    }

    const handleAmountChange = (prodId, e) => {
        const input = e.target.value;
        if(!isNaN(input)) {
            setQuantity(input)

            setCartTotal(cartTotal - quantity + +input )
            setCart({...cart, [prodId]: +input})
        }
    }

    const handleAmountInc = (prodId) => {
        setQuantity(quantity + 1)

        setCartTotal(cartTotal + 1)
        setCart({...cart, [prodId]: quantity + 1})

    }

    const handleAmountDec = (prodId) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            setCartTotal(cartTotal - 1)
            setCart({...cart, [prodId]: quantity - 1})   
        }
    }

    const product = products.find(product => product.id === productId)

    return (
        <div className='cart_item'>
            <div>
                <img src={product.image} alt=""></img>
            </div>
            <div>{product.title}</div>
            <AmountAdjust productId={ productId } amount = { quantity } 
                            handleAmountChange = { handleAmountChange }
                            handleAmountDec = { handleAmountDec }
                            handleAmountInc = { handleAmountInc } />
                            
            <div>${+product.price * +quantity}</div>

            <div className='icon' onClick={onDelete}>
                <MaterialIcon icon="delete" size={20} />
            </div>
        </div>
    )
}

export default Cart;