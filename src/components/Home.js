import '../style/home.css'
import MAIN_IMAGE from '../images/front-image.jpeg'
import { Link } from 'react-router-dom';

const Home = ({cartTotal}) => {

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
    }

    return (
        <div className='container' data-testid="home">
            <div className='main_image'>
                <img src={MAIN_IMAGE} alt=''></img>
                <div>
                    <p>UPDATE YOUR HOME WITH TEXTILE</p>
                    <Link to="/shop" style={linkStyle} data-testid="see_products">
                        <button>SEE OUR PRODUCTS</button>
                    </Link>
                </div>   
            </div>
        </div>
    )
}

export default Home;