import '../style/home.css'
import Header from './Header';
import Footer from './Footer';
import "../style/cart.css"
import { products } from '../products';
import MaterialIcon from 'material-icons-react';
import { useState } from 'react';

const Cart = ({cartTotal, setCartTotal, cart, setCart}) => {

    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        // pass to backend
        // clean up    
        setCartTotal(0);
        setSuccess(true);
    }

    const successMsg = "Thank you for submitting your order!"
    const emptyMsg = "Your cart is empty."
    
    return (
        <div className='container'>
            <Header cartTotal={cartTotal}/>
            <div className='cart_content'>
                { Object.keys(cart).length === 0 ? <div className='cart_msg'>{success ? successMsg : emptyMsg}</div> : 
                    (
                        // Array.from(cart.entries()).map(entry => {
                        //     const [key, value] = entry;
                        //     return (<CartItem product={key} amount={value} cart={cart} setCart={setCart}/>)
                        // })
                        Object.entries(cart).map(([key, value]) => {
                            return (
                                <CartItem key={key} productId={key} amount={value} cart={cart} setCart={setCart}/>
                            );
                        })
                    )
                }
            </div>
            { Object.keys(cart).length === 0 ? null : 
                <button className='submit' onClick={handleSubmit}>SUBMIT ORDER</button>
            }
            <Footer />
        </div>
    )
}

const CartItem = ({productId, amount, cart, setCart}) => {

    const onDelete = () => {
    }

    const product = products.find(product => product.id === productId)

    return (
        <div className='cart_item'>
            <div>
                <img src={product.image} alt=""></img>
            </div>
            <div>{product.title}</div>
            <div>{amount}</div>
            <div>${+product.price * +amount}</div>

            <MaterialIcon id="edit" icon="edit" size={20} />
            <MaterialIcon id="delete" icon="delete" size={20} onClick={onDelete}/>
        </div>
    )
}

export default Cart;