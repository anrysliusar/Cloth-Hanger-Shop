import React, {useEffect} from 'react';
import Header from "./components/header/Header";
import classes from './styles.module.css'
import NavbarCategory from "./components/navbar/NavbarCategory";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/action-creators";

const App = (props) => {
    const products = useSelector(({products: {products}}) => products)
    const dispatch = useDispatch()
    console.log(products);
    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])

    return (
            <BrowserRouter>
                <div className={classes.wrapper}>
                    <Header/>
                    <NavbarCategory/>
                    <div className={classes.mainBlock}>
                        <Sidebar/>
                        <Content products={products}/>
                    </div>

                </div>
            </BrowserRouter>

        );
}


export default App;