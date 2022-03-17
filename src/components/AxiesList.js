import React from "react";
import AxiesItem from "./AxiesItem";

import classes from "./AxiesList.module.css";

const AxiesList = ({ axiesData, isLoading }) => {
    return (
        <div className={classes.axies_container}>
            {isLoading ?
                (<div className={classes.loading_container}>Loading...</div>) :
                (<div>
                    {axiesData?.axies?.results.map((item) => (
                        <AxiesItem
                            imgUrl={item.image}
                            id={item.id}
                            name={item.name}
                            breedCount={item.breedCount}
                        />
                    ))}
                </div>)
            }
        </div>
    );
};

export default AxiesList;

