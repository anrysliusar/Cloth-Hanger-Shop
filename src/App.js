import React, {Component} from 'react';
import Header from "./components/header/Header";
import classes from './styles.module.css'
import NavbarCategory from "./components/navbar/NavbarCategory";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={classes.wrapper}>
                    <Header/>
                    <NavbarCategory/>
                    <div className={classes.mainBlock}>
                        <Sidebar/>
                        <Content/>
                    </div>

                </div>
            </BrowserRouter>

        );
    }
}

export default App;