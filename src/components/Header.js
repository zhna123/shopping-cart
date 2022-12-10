import '../style/header.css'
import LOGO from '../images/logo.png'
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

const Header = ({cartTotal}) => {
    const goldColorStyle = {
        color: "#ffbf00"
    }
    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
        
    }

    return (
        <nav>
            <ul>
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
                <Link to="/cart" >
                    <MaterialIcon icon="shopping_cart" size={50} color="#ffffff"/>
                </Link>
            </div>
        </nav>
    )
}

export default Header;