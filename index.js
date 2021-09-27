import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const rootElement = document.getElementById("root");

axios.defaults.withCredentials = true;

ReactDOM.render(
    <App />
    , rootElement);

