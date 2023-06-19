import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./styles/index.scss";
import App from "./App";

const defaultState = {
    scroll: 0,
    window_w: 0,
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SCROLL":
            return { ...state, scroll: action.payload };
        case "SET_WIDTH":
            return { ...state, window_w: action.payload };
        default:
            return state;
    }
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
