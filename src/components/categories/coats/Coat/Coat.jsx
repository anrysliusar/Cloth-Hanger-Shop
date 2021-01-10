import React from 'react'
import classes from './Coat.module.css'
import {NavLink, withRouter} from "react-router-dom";

const Coat = ({product: product}) =>{
    return <div>
        <div>
            <div className={classes.blockItem}>
                <div className={classes.imgBlock}>
                    <img src={product.image} alt=""/>
                </div>
                <div className={classes.title}>
                    <h6>{product.title}</h6>
                </div>
                <div className={classes.price}>
                    <p>{product.price}$</p>
                </div>

            </div>
        </div>
    </div>
}

export default withRouter(Coat)