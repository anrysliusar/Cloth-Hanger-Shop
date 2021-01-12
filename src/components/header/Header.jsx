import React from 'react'
import navIcon from './images/navicon.png'
import logoIcon from './images/logo.png'
import accountIcon from './images/user_account_icon.png'
import wishListIcon from './images/wish_list_icon.png'
import cartListIcon from './images/shopping-cart-icon.png'
import classes from './Header.module.css'
import {useSelector} from 'react-redux'
import {NavLink} from "react-router-dom";



const Header = (props) =>{
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart: {cart}}) => ({wishlist, cart}))

    return <header className={classes.header}>

            <img src={navIcon} alt="menu" className={classes.navIcon}/>

            <div className={classes.blockLogo}>
                <img src={logoIcon} alt="clothes hanger" className={classes.logoIcon}/>
                <h1 className={classes.mainTitle}>Cloth-Hanger</h1>
            </div>
            <div className={classes.headerRightSideBlock}>
                <div className={classes.headerRightSideBlockItem}>
                    <NavLink to={'/wishlist'}>
                        <img src={wishListIcon} alt="wishListIcon" />
                    </NavLink>
                    <span>{wishlist.length}</span>
                </div>
                <div className={classes.headerRightSideBlockItem}>
                    <NavLink to={'/cart'}>
                    <img src={cartListIcon} alt="cartListIcon" />
                    </NavLink>
                    <span>{cart.length}</span>
                </div>
                <div className={classes.headerRightSideBlockItem}>
                    <img src={accountIcon} alt="accountIcon" />

                </div>
            </div>
    </header>
}

export default Header