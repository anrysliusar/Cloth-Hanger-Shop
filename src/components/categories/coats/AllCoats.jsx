import React from 'react';
import ProductItem from "../../productItem/ProductItem";
import classes from '../../productItem/AllProducts.module.css'


const AllCoats = (props) => {
    const products = props.products
    return (
        <div>
            <h3>Coats</h3>
            <hr/>
            <div className={classes.listItems}>
                {
                    products.map(product => <ProductItem
                        product={product}
                        key={product.id}/>)
                }
            </div>
        </div>
        );
}

export default AllCoats