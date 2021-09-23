import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Counter from './views/Stock_List/Counter'
import "antd/dist/antd.css";
import Router from './Router/Router'

const App = () => {

	return (
		<RecoilRoot>
			<Router />
		</RecoilRoot>
	)
}

export default App;
