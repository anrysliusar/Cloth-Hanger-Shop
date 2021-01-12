import React from 'react';
import Coat from "../Coat/Coat";
import classes from './AllCoat.module.css'

const AllCoats = (props) => {
    const products = props.products
    return (
        <div>
            <h3>Coats</h3>
            <div className={classes.listItems}>
                {
                    products.map(product => <Coat
                        product={product}
                        key={product.id}/>)
                }
            </div>

            <hr/>
        </div>
        );
}

export default AllCoats