import React, {useState} from 'react'
import classes from './ProductItem.module.css'
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductCart, addProductWishlist} from "../../redux/action-creators";

const ProductItem = ({product: product}) =>{
    const dispatch = useDispatch()
    // todo save initialState in store
    let [isInCart, setInCart] = useState(null)
    // todo save initialState in store
    let [isInWishlist, setInWishlist] = useState(null)
    const addToCart = () => {
        dispatch(addProductCart(product))
        setInCart(!isInCart)
    }
    const addToWishlist = () => {
        dispatch(addProductWishlist(product))
        setInWishlist(!isInWishlist)
    }
    return <div>
            <div className={classes.blockItem}>
                <div className={classes.imgBlock}>
                    <img src={product.image} alt=""/>
                </div>
                <div className={classes.title}>
                    <h6>{product.title}</h6>
                </div>
                <div>
                    <div className={classes.price}>
                        <p>{product.price}$</p>
                    </div>
                    <div>
                        <button onClick={addToCart}>{isInCart ? "throw away from cart" : "to cart"}</button>
                        <button onClick={addToWishlist} >{isInWishlist ? "throw away from wishlist" : "to wishlist" }</button>
                    </div>

                </div>

            </div>

    </div>
}

export default withRouter(ProductItem)