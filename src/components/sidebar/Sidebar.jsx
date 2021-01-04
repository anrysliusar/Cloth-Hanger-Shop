import React from 'react'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return <div className={classes.sidebar}>
        <div className={classes.filterSize}>
            <p className={classes.titleForm}>Size</p>
            <ul>
                <li>
                    <label><input type="checkbox" id='size1'/>M</label>
                </li>
                <li>
                    <label><input type="checkbox" id='size2'/>L</label>
                </li>
                <li>
                    <label><input type="checkbox" id='size3'/>XL</label>
                </li>
            </ul>
        </div>

    </div>
}

export default Sidebar