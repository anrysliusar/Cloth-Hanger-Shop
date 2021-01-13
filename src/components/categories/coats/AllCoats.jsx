import React, {useEffect}  from 'react';
import ProductItem from "../../productItem/ProductItem";
import classes from '../../productItem/AllProducts.module.css'
import {setProducts} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";


const AllCoats = () => {

    const products = useSelector(({products: {products}}) => products)
    const dispatch = useDispatch()
    console.log(products);

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])

    return (
        <div>
            <h3>Coats</h3>
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

export default AllCoats
