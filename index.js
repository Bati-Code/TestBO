import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import Reducer from "./redux/store/combine_reducer";
import "antd/dist/antd.css";

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 });
const store = createStore(Reducer, devTools);
const rootElement = document.getElementById("root");

axios.defaults.withCredentials = true;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);

