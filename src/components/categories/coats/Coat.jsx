import React from 'react'
import classes from './Coat.module.css'
import {NavLink, withRouter} from "react-router-dom";

const Coat = ({product: product, match: {url} }) =>{
    return <div>
        <h3>Coat</h3>
        <div>
            { product.title} - <NavLink to={`${url}/${product.id}`}>details</NavLink>
        </div>
    </div>
}

export default withRouter(Coat)