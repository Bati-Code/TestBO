import React from 'react'
import { Button, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const HeaderMenu = () => {

    const history = useHistory();

    const Logout_Handler = () => {
        console.log("logout");
        Cookies.remove('Access_Token');
        Cookies.remove('Refresh_Token');
        history.push('/');
    }


    return (
        <>
        <Button onClick={Logout_Handler}>로그아웃</Button>
        </>
    )
}

export default HeaderMenu;