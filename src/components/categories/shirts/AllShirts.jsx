import React, {useEffect} from 'react';
import ProductItem from "../../productItem/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../../redux/action-creators";
import classes from "../../productItem/AllProducts.module.css";


const AllShirts = () => {
    const products = useSelector(({products: {products}}) => products)
    const dispatch = useDispatch()
    console.log(products);

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])

    return (
        <div>
            <h3>Shirts</h3>
            <hr/>
            <div className={classes.listItems}>
                {
                    products.map(product =>
                        <ProductItem
                            product={product}
                            key={product.id}
                        />)
                }
            </div>
        </div>
    );
}


export default AllShirts