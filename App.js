import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from './Router/Router';
import ErrorHandler from "./views/Data/ErrorHandler/ErrorHandler";
import { Interceptor } from './views/Data/Interceptor/Interceptor'


// axios.interceptors.request.use((config) => {
// 	config.headers.Authorization = Cookies.get("Access_Token");

// 	return config;
// });

// axios.interceptors.response.use((config) => {

// 	console.log("Status", config.status);

// 	return config;
// },
// 	(error) => {
// 		console.log("Error Status", error.response.data.status);
// 	})





const App = () => {

	//InterceptorA(axios);

	const history = useHistory();

	const axios_func = () => {

		axios.interceptors.request.use((config) => {
			config.headers.Authorization = Cookies.get("Access_Token");

			return config;
		});

		axios.interceptors.response.use((config) => {

			console.log("Status", config.status);

			return config;
		},
			(error) => {
				console.log("Error Status", error.response.data.status);
				ErrorHandler(error.response.data.status);
				history.push("/Counter");
			})
	}

	axios_func();


	return (
		<>
			<Router />
		</>

	)
}

export default App;
