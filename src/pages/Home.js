import React from "react";
import Banner from "../components/Banner";
import Apartments from "../components/Apartments";

const Home = () => {
    return (
        <div className="main">
            <Banner />
            <Apartments />
        </div>
    );
};

export default Home;