import React from "react";

import classes from "./AxiesItem.module.css";

const AxiesItem = ({ imgUrl, id, name, breedCount }) => {
    return (
        <div className={classes.container}>
            <img className={classes.axie_img} src={imgUrl} alt='../image/alt.png' />
            <span className={classes.name} >{name === "" ? "No name" : name}</span>
            <span className="id" >#{id}</span>
            <span className="bread-count" >Breed count:{breedCount}</span>
        </div>
    );
};

export default AxiesItem;