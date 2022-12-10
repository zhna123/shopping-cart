import '../style/home.css'
import Header from './Header';
import Footer from './Footer';

const Cart = ({cartTotal}) => {

    return (
        <div className='container'>
            <Header cartTotal={cartTotal}/>
            <div className='cart_content'>
                cart content
            </div>
            <Footer />
        </div>
    )
}

export default Cart;