import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const LayoutMenu = () => {

    const { SubMenu } = Menu;

    const MenuClick_Hanlder = (e) => {
        console.log('MenuClicked', e);
    }



    return (
        <>
            <Menu
                theme="dark"
                mode="inline"
                onClick = {MenuClick_Hanlder}>
                <SubMenu key="a" title="Analysis">
                    <Menu.Item><Link to="Expert_Analysis">전문가 분석</Link></Menu.Item>
                    <Menu.Item><Link to="SMS_Manage">문자 관리</Link></Menu.Item>
                    <Menu.Item>aa</Menu.Item>
                </SubMenu>
                <SubMenu key="b" title="b">
                    <Menu.Item>bb</Menu.Item>
                    <Menu.Item>bb</Menu.Item>
                    <Menu.Item>bb</Menu.Item>
                </SubMenu>
            </Menu>
        </>
    )
}

export default LayoutMenu;