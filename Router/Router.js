import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page from './Page'

import Login from '../views/Login/login'

const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />

                    <Switch>
                        <Route path="/:firstPath" render={({location}) => {

                            return(<Page pathname={location.pathname}/>)
                        }} />
                        <Route path="/:firstPath/:secondPath" render={({location}) => <Page path={location.pathname}/>} />
                    </Switch>
                </Switch>
            </BrowserRouter>
        </>
    )


}

export default Router;