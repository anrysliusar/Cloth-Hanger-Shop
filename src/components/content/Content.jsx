import React from 'react'
import classes from './Content.module.css'
import {Route, Switch} from "react-router-dom";
import AllCoats from "../categories/coats/AllCoats";
import Wishlist from "../wishlist/Wishlist";
import AllShoes from "../categories/shoes/AllShoes";
import AllJeans from "../categories/jeans/AllJeans";
import AllShirts from "../categories/shirts/AllShirts";
import Cart from "../cart/Cart";

const Content = () =>{

    return <div className={classes.content}>
        <Switch>
            <Route path={'/wishlist'} component={Wishlist}/>
            <Route path={'/cart'} component={Cart}/>
            <Route path={'/coats'} component={AllCoats}/>
            {/*<Route path={'/coats'} render={() => {*/}
            {/*    return <AllCoats products={props.products}/>*/}
            {/*}}/>*/}
            <Route path={'/shirts'} component={AllShirts}/>
            <Route path={'/shoes'} component={AllShoes}/>
            <Route path={'/jeans'} component={AllJeans}/>
        </Switch>
    </div>
}

export default Content
