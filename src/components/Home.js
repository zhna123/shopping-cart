import '../style/home.css'
import MAIN_IMAGE from '../images/front-image.jpeg'
import Header from './Header';
import Footer from './Footer';

const Home = ({cartTotal}) => {

    return (
        <div className='container'>
            <Header cartTotal={cartTotal}/>
            <div className='main_image'>
                <img src={MAIN_IMAGE} alt=''></img>
                <div>UPDATE YOUR HOME WITH TEXTILE
                    <button>SEE OUR PRODUCTS</button>
                </div>   
            </div>
            <Footer />
        </div>
    )
}

export default Home;