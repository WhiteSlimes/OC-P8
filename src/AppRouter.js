import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";

function AppRouter(){
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    );
}


export default AppRouter;