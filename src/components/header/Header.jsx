import React from 'react'
import navIcon from './images/navicon.png'
import logoIcon from './images/logo.png'
import accountIcon from './images/user_account_icon.png'
import wishListIcon from './images/wish_list_icon.png'
import cartListIcon from './images/shopping-cart-icon.png'
import classes from './Header.module.css'


const Header = () =>{
    return <header className={classes.header}>
            {/*link to NavbarCategory*/}
            <img src={navIcon} alt="menu" className={classes.navIcon}/>

            <div className={classes.blockLogo}>
                <img src={logoIcon} alt="clothes hanger" className={classes.logoIcon}/>
                <h1 className={classes.mainTitle}>Cloth-Hanger</h1>
            </div>
            <div className={classes.headerRightSideBlock}>
                <img src={wishListIcon} alt="" />
                <img src={cartListIcon} alt="" />
                <img src={accountIcon} alt="" />
            </div>
    </header>


}

export default Header