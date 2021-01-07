import React from 'react'
import classes from './Jeans.module.css'
import {NavLink, withRouter} from "react-router-dom";

const Shoe = ({product, match: {url} }) =>{
    return <div>
        <div>
            { product.title} - <NavLink to={`${url}/${product.id}`}>details</NavLink>
        </div>
    </div>
}

export default withRouter(Shoe)