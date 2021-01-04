import React from 'react'
import classes from './Content.module.css'
import {Route, Switch} from "react-router-dom";
import Coat from "../categories/coats/Coat";
import Shirt from "../categories/shirts/Shirt";
import Shoe from "../categories/shoes/Shoe";
import Jeans from "../categories/jeans/Jeans";

const Content = () =>{
    return <div className={classes.content}>
        <Switch>
            <Route path={'/coats'} component={Coat}/>
            <Route path={'/shirts'} component={Shirt}/>
            <Route path={'/shoes'} component={Shoe}/>
            <Route path={'/jeans'} component={Jeans}/>
        </Switch>
    </div>
}

export default Content