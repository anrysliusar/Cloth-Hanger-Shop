import React from 'react'
import classes from './NavbarCategory.module.css'
import {NavLink} from 'react-router-dom'


const NavbarCategory = (props) => {
    return <div className={classes.category}>
        <ul>
            <li className={classes.categoryItem}><NavLink to={'/coats'} activeClassName={classes.activeLink} >Coats</NavLink></li>
            <li className={classes.categoryItem}><NavLink to={'/shirts'} activeClassName={classes.activeLink}>Shirts</NavLink></li>
            <li className={classes.categoryItem}><NavLink to={'/shoes'} activeClassName={classes.activeLink}>Shoes</NavLink></li>
            <li className={classes.categoryItem}><NavLink to={'/jeans'} activeClassName={classes.activeLink}>Jeans</NavLink></li>
        </ul>


    </div>
}

export default NavbarCategory