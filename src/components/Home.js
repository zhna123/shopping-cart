import '../style/home.css'
import MAIN_IMAGE from '../images/front-image.jpeg'
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = ({cartTotal}) => {

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
    }

    return (
        <div className='container' data-testid="home">
            <Header cartTotal={cartTotal}/>
            <div className='main_image'>
                <img src={MAIN_IMAGE} alt=''></img>
                <div>UPDATE YOUR HOME WITH TEXTILE
                    <Link to="/shop" style={linkStyle}>
                        <button>SEE OUR PRODUCTS</button>
                    </Link>
                </div>   
            </div>
            <Footer />
        </div>
    )
}

export default Home;