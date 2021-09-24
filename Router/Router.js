import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pages from './Page'

import LoginPage from '../views/Login/LoginPage'
import RegisterPage from '../views/Register/RegisterPage'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/Register" component={RegisterPage} />


                    <Switch>
                        <Route path="/:firstPath" render={({location}) => {

                            return(<Pages pathname={location.pathname}/>)
                        }} />
                        <Route path="/:firstPath/:secondPath" render={({location}) => <Pages path={location.pathname}/>} />
                    </Switch>
                </Switch>
            </BrowserRouter>
        </>
    )


}

export default Router;