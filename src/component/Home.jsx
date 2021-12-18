import '../style/style.css'
import { Link } from 'react-router-dom';
import shopping from '../images/Shopping.png'
function Home() {
    return ( 
        <div className="main_Home_handler">
            <div className="container">
                <div className="title-container">
                    <h2 className="fake_store">
                        get all ur product online
                    </h2>
                    <h2>
                        from Fake <span>Shop</span>
                    </h2>
                    <Link to="/shop">
                        <button className="shop_btn">
                            go shopping
                        </button>
                    </Link>
                </div>
               {/* <div className="image">
                    <img src={shopping} alt="" />
                </div> */}
            </div>
        </div>
     );
}

export default Home;