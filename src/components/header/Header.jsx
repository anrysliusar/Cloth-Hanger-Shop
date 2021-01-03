import React from 'react'
import menuIcon from './menu-icon.jpg'
import logo from './logo.jpg'
import classes from './Header.module.css'


const Header = () =>{
    return <header>
        <img src={menuIcon} alt="menu"/>
        <img src={logo} alt="cloth-hanger"/>

        <h1 className={classes.mainTitle}>Cloth-Hanger</h1>
        <h3 className={classes.underTitle}>Stylish clothing store</h3>
        <nav className="header-menu">
            <div className={classes.savedItems}>
                <a href="#" className={classes.savedItem}>Account</a>
                <a href="#" className={classes.savedItem}>WishList</a>
                <a href="#" className={classes.savedItem}>Shopping cart</a>
            </div>

            {/*<div><a className="nav-item" href="#">Економіка</a></div>*/}
            {/*<div><a className="nav-item" href="#">Життя</a></div>*/}
            {/*<div><a className="nav-item" href="#">Європа</a></div>*/}
            {/*<div><a className="nav-item" href="#">Форум</a></div>*/}
            {/*<div><a className="nav-item" href="#">Блоги</a></div>*/}
            {/*<div><a className="nav-item" href="#">Історична правда</a></div>*/}
            {/*<div><a className="nav-item" href="#">ТаблоID</a></div>*/}
            {/*<div><a className="nav-item" href="#">Доступ</a></div>*/}
            {/*<div><a className="nav-item" href="#">Правда SOS</a></div>*/}
        </nav>
    </header>


}

export default Header