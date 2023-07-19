import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function AppRouter(){
    return(
        <Router>
            <div className="App__HeaderMain">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}


export default AppRouter;