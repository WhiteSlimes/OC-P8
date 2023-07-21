import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import Accomodation from "./pages/Accomodation.js"

function AppRouter(){
    return(
        <Router>
            <div className="App__HeaderMain">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/*" element={<Error />} />
                    <Route path="/accomodation/:id" element={<Accomodation />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}


export default AppRouter;