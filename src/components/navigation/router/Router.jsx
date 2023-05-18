import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Navigation from "../nav/Nav";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Start from "../../pages/start/Start";
import FAQ from "../../pages/faq/FAQ";

const Router = () => {
    // const basename = "/projects/BefaArt/";
    const basename = "";
    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop />
            <Navigation />
            <Routes>
                <Route element={<Home />} exact path="/" />
                <Route element={<Start />} exact path="/start" />
                <Route element={<About />} exact path="/about" />
                <Route element={<FAQ />} exact path="/faq" />
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
