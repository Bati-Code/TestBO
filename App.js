import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { RecoilRoot } from "recoil";
import Router from './Router/Router';


axios.interceptors.request.use(function (config) {
	config.headers.Authorization = Cookies.get("Access_Token");

	return config;
});

const App = () => {

	//axios.interceptors.headers.common['Authorization'] = Cookies.get("Access_Token");

	return (
		<>
			<Router />
		</>

	)
}

export default App;
