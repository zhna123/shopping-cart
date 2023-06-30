import '../style/header.css'
import LOGO from '../images/logo.png'
import CART from '../images/cart.png';
import { Link } from 'react-router-dom';

const Header = ({cartTotal}) => {
    const goldColorStyle = {
        color: "#ffbf00"
    }
    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'      
    }

    const cartLinkStyle = {
        display: "inline-block",
        height: "40px",
        width: "40px"
    }

    return (
        <nav>
            <ul className='menu'>
                <Link to="/" style={linkStyle}>
                    <li>HOME</li>
                </Link>
                <Link to="/shop" style={linkStyle}>
                    <li style={goldColorStyle}>SHOP</li>
                </Link>
                <li>ABOUT</li>
            </ul>
            <img src={LOGO} alt=''></img>
            
            <div className='cart'>
                <div className='cart_amount'>{cartTotal}</div>
                <Link to="/cart" data-testid='cart_icon' style={cartLinkStyle}>
                    <img src={CART} alt=''></img>
                </Link>
            </div>
        </nav>
    )
}

export default Header;