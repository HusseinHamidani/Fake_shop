import axios from 'axios'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setProducts } from '../redux/actions/productAction';
import '../style/productStyle/products.css'
function AllProducts(){
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    const fetchProducts = async ()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) =>{
            console.log("err", err);
        })
        console.log(response);
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log(products);

    return(
        <div className="main_products_section">
            {
                products.map((singleProduct)=>(
                <Link to={`/products/${singleProduct.id}`}>
                    <div className="card" key={singleProduct.id}>
                        <div className="img">
                            <img src={singleProduct.image} alt="" />
                        </div>
                        <div className="content">
                            <h2 className="header">{singleProduct.title}</h2>
                            <h2 className="price">{singleProduct.price}</h2>
                            <h2 className="category">{singleProduct.category}</h2>
                        </div>
                    </div>
                </Link>
                ))
            }
        </div>
    )
}

export default AllProducts