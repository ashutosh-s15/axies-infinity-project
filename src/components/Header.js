import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <>
            <div className={classes.header}>
                <div className={classes.container}>
                    <span className={classes.title}>AXIS INFINITY</span>
                </div>
            </div>
        </>
    );
};

export default Header;
