import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productAction";
import '../style/productStyle/products.css'
function ProductDetails() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const singleProductDetails = useSelector(state => state.Sproduct)
    const fetchSingleProduct = async ()=>{
        const responce = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) =>{
            console.log("err", err);
        })
        dispatch(selectedProduct(responce.data))
    }
    useEffect(()=>{
        if(id && id !== "") {fetchSingleProduct();}
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    },[id])
    console.log(singleProductDetails);
    return ( 
        <div className="productDeatials">
            <div className="product_detail_handler">
                <div className="image_handler">
                    <img src={singleProductDetails.image} className="single_image"/>
                </div>
                <div className="detail_handler">
                    <h2 className="title_name">{singleProductDetails.title}</h2>
                    <span className="price">{singleProductDetails.price}</span>
                    <h3 className="category">{singleProductDetails.category}</h3>
                    <p className="discription">
                        {singleProductDetails.description}
                    </p>
                    <button className="addToCard">Add to Card</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;