import React from 'react';
import {useSelector} from "react-redux";
import classes from '../productItem/AllProducts.module.css'
import ProductItem from "../productItem/ProductItem";


const Cart = () => {
    const cartItems = useSelector(({cart: {cart}}) => cart)
    return (
        <div>
            <h3 className={classes.title}>Cart</h3>
            <div className={classes.listItems}>

                {
                    cartItems.map(item => <ProductItem key={item.id} product={item} />)
                }

            </div>
        </div>
    );
}

export default Cart;
