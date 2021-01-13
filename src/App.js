import React, {useEffect} from 'react';
import Header from "./components/header/Header";
import classes from './styles.module.css'
import NavbarCategory from "./components/navbar/NavbarCategory";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";


const App = () => {

    return (
        <div className={classes.wrapper}>
            <Header/>
            <NavbarCategory/>
            <div className={classes.mainBlock}>
                <Sidebar/>
                {/*пропоную products перенести у AllCoats  */}
                {/*<Content products={products}/>*/}
                <Content/>
            </div>
        </div>
    );
}

export default App;
