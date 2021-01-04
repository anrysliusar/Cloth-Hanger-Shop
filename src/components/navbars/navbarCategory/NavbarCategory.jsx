import React from 'react'
import classes from './NavbarCategory.module.css'

const NavbarCategory = () => {
    return <div className={classes.category}>
        <div className={classes.categoryItem}>Shirt</div>
        <div className={classes.categoryItem}>Shoes,</div>
        <div className={classes.categoryItem}>Jeans</div>
        <div className={classes.categoryItem}>Coat</div>
    </div>
}

export default NavbarCategory