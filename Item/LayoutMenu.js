import React from 'react'
import { Menu } from 'antd';

const LayoutMenu = () => {

    const { SubMenu } = Menu;



    return (
        <>
            <Menu
                theme="dark"
                mode="inline">
                <SubMenu key="a" title="a">
                    <Menu.Item>aa</Menu.Item>
                    <Menu.Item>aa</Menu.Item>
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