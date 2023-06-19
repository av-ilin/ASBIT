import Router from "./components/navigation/router/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    const onScroll = () =>
        dispatch({ type: "SET_SCROLL", payload: window.scrollY });
    const onResize = () =>
        dispatch({ type: "SET_WIDTH", payload: window.innerWidth });

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return <Router />;
}

export default App;
