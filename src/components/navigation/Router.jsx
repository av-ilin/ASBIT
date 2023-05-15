import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./nav/Nav";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const Router = () => {
    // const basename = "/projects/BefaArt/";
    const basename = "";
    return (
        <BrowserRouter basename={basename}>
            <Navigation />
            <Routes>
                <Route element={<Home />} exact path="/" />
                <Route element={<About />} exact path="/about" />
                <Route
                    element={
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                            }}
                        >
                            Not Found
                        </div>
                    }
                    path="*"
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
