import '../style/home.css'
import Header from './Header';
import Footer from './Footer';
import "../style/cart.css"
import { products } from '../products';
import MaterialIcon from 'material-icons-react';
import { useEffect, useState } from 'react';

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
        <div className='container'>
            <Header cartTotal={cartTotal}/>
            <div className='cart_content'>
                { Object.keys(cart).length === 0 ? <div className='cart_msg'>{success ? successMsg : emptyMsg}</div> : 
                    (
                        Object.entries(cart).map(([key, value]) => {
                            return (
                                <CartItem key={key} productId={key} amount={value} cart={cart} setCart={setCart} cartTotal={cartTotal} setCartTotal={setCartTotal}/>
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

const CartItem = ({productId, amount, cart, setCart, cartTotal, setCartTotal}) => {

    const [edit, setEdit] = useState(false);
    const [quantity, setQuantity] = useState(amount)

    const onDelete = () => {
        const {[productId]: _, ...rest} = cart;
        setCart(rest);
        setCartTotal(cartTotal - amount)
    }

    const onEdit = () => {
        setEdit(true);
    }

    const onBlur = (quantity) => {
        setEdit(false)
        setQuantity(quantity)
        
        setCartTotal(cartTotal + (quantity - amount))
        setCart({...cart, [productId]: quantity})
    }

    const handleChange = (e) => {
        const input = e.target.value;
        if (!isNaN(input) && input > 0) {
            setQuantity(e.target.value);
        }
    }

    const product = products.find(product => product.id === productId)

    return (
        <div className='cart_item'>
            <div>
                <img src={product.image} alt=""></img>
            </div>
            <div>{product.title}</div>
            {edit ? <input type="text" value={quantity} onBlur={onBlur.bind(null, quantity)} onChange={handleChange} autoFocus/>
                    : <div>{quantity}</div>}

            <div className='icon edit' onClick={onEdit}>
                <MaterialIcon icon="edit" size={20} />
            </div>
                              
            <div>${+product.price * +amount}</div>

            <div className='icon' onClick={onDelete}>
                <MaterialIcon icon="delete" size={20} />
            </div>
        </div>
    )
}

export default Cart;