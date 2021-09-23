import React from 'react'
import './css/MainLayout.css'
import logoImage from '../public/images/logo.png'

import Counter from '../views/Stock_List/Counter';
import LayoutMenu from '../Item/LayoutMenu';
import LoginPage from '../views/Login/LoginPage';

const Page = (props) => {

    const Switch_Page = () => {
        let params = props.pathname;
        params = params.replace('/', '');

        console.log(params);

        switch (params) {
            case 'Counter':
                return <Counter />
            case 'Login':
                return <LoginPage />
            default: return "ERROR Page"
        }
    }

    const MainLayout = () => {

        return (
            <>
                <div id="container">
                    <div id="header">
                        <div id="logo">
                            <img src={logoImage}></img>
                        </div>
                        <div id="headerMenu">
                            HeaderMenu
                        </div>
                    </div>
                    <div id="body">
                        <div id="side">
                            <LayoutMenu />
                        </div>
                        <div id="content">
                            <Switch_Page />
                        </div>
                    </div>
                </div>
            </>
        )

    }


    return (
        <>
            <MainLayout />
        </>
    )
}

export default Page;