import React from 'react';
import {useSelector} from "react-redux";
import classes from '../productItem/AllProducts.module.css'
import ProductItem from "../productItem/ProductItem";


const Wishlist = () => {
    const wishItems = useSelector(({wishlist: {wishlist}}) => wishlist)
    return (
        <div>
            <h3 className={classes.title}>Wishlist</h3>
            <div className={classes.listItems}>

                {
                    wishItems.map(item => <ProductItem product={item} />)
                }

            </div>
        </div>
    );
}

export default Wishlist;