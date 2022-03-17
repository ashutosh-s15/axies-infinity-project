import React, { useState } from "react";

import Header from "./components/Header";
import FilterForm from "./components/FilterForm";
import AxiesList from "./components/AxiesList";
import getAxies from "./api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const [axiesData, setAxiesData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const notify = (msg) => toast(msg);

    const getAxiesHandler = (axiesFilterData) => {
        setIsLoading(true);
        getAxies(axiesFilterData)
            .then((res) => {

                if (res) {
                    notify("No results found.");
                    console.log("emoty response")
                }

                const { data } = res;
                setAxiesData(data);
                setIsLoading(false);
                console.log(res);
                console.log(axiesData);

                //notification for error
                if (res.errors) {
                    notify("Bad request: Please check your input");
                }
            })
            .catch((e) => {
                console.log(e);
            })
    };

    return (
        <>
            <Header />
            <FilterForm onSaveData={getAxiesHandler} />
            <AxiesList axiesData={axiesData} isLoading={isLoading} />
            <ToastContainer />
        </>
    );
}

export default App;