import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from './Router/Router';
import { Address_Config } from "./views/Data/Config/Config";
import ErrorHandler from "./views/Data/ErrorHandler/ErrorHandler";
import { Interceptor } from './views/Data/Interceptor/Interceptor'

const App = () => {

	//InterceptorA(axios);
	const history = useHistory();

	const axios_func = () => {

		axios.interceptors.request.use((config) => {

			console.log("Request Interseptor");
			config.headers.Authorization = Cookies.get("Access_Token");
			config.headers.Authorization_Refresh = Cookies.get("Refresh_Token");
			return config;
		}, (error) => {

			console.log("Request Error Status", error.response.data.status);
			ErrorHandler(error.response.data.status);

			return Promise.reject(error);
		});

		axios.interceptors.response.use((config) => {

			console.log("Response Interseptor");
			console.log("Status", config.status);

			return config;
		},
			(error) => {
				console.log("Response Error Status", error.response.data.status);
				ErrorHandler(error.response.data.status);

				return Promise.reject(error);

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
