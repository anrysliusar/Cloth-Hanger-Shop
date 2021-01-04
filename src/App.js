import React, {Component} from 'react';
import Header from "./components/header/Header";
import classes from './styles.module.css'
import NavbarGender from "./components/navbars/navbarGender/NavbarGender";
import NavbarCategory from "./components/navbars/navbarCategory/NavbarCategory";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";

class App extends Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <Header/>
                {/*<NavbarGender/>*/}
                <NavbarCategory/>
                <div className={classes.mainBlock}>
                    <Sidebar/>
                    <Content/>
                </div>

            </div>
        );
    }
}

export default App;