import Router from "./components/navigation/router/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    const onScroll = () =>
        dispatch({ type: "SET_SCROLL", payload: window.scrollY });
    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return <Router />;
}

export default App;
