import { Col, Image, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCartOutlined, BellOutlined, DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons'

import { Menu } from 'antd';

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';

const { SubMenu } = Menu;

const TopHeader = () => {
    const cart = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.users.user);
    const [current, setCurrent] = useState('')

    const handleClick = e => {
        setCurrent({ current: e.key });
    };

    return (
        <MenuWrapper onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.ItemGroup className="menu-left" style={{ float: 'left' }}>
                {
                    !user &&
                    <Menu.Item key="login">
                        <LinkedMenu to="/users/login" rel="noopener noreferrer">
                            Sign in
                        </LinkedMenu>
                    </Menu.Item>
                }

                {
                    !user &&
                    <Menu.Item key="register">
                        <LinkedMenu to="users/register" rel="noopener noreferrer">
                            Register
                        </LinkedMenu>
                    </Menu.Item>
                }

                {
                    user &&
                    <Menu.Item key="home">
                        <LinkedMenu to="/" rel="noopener noreferrer">
                            Home
                        </LinkedMenu>
                    </Menu.Item>
                }

                {
                    user &&
                    <Menu.Item key="dashboard">
                        <LinkedMenu to="/dashboard" rel="noopener noreferrer">
                            Dashboard
                        </LinkedMenu>
                    </Menu.Item>
                }
               
                
                <Menu.Item key="shop">
                    <LinkedMenu to="/shop" rel="noopener noreferrer">
                        Shop
                    </LinkedMenu>
                </Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup className="menu-right" style={{ float: 'right' }}>
                
                    {
                        user && 
                        <Menu.Item key="profile">
                            <Link to="/dashboard/user/profile">
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                />
                            </Link>
                        </Menu.Item>
                    }
                
                    {
                        user && 
                        <Menu.Item key="logout">
                            <LogoutOutlined style={{marginRight: '5px'}} />
                                <Link to="/users/logout">Logout</Link>
                        </Menu.Item>
                    }
                    
               
                <Menu.Item key="cart">
                    <Link to="/cart">
                        <CartArea className={cart?.length ? 'active' : ''}>
                            <ShoppingCartOutlined />

                            {cart.length ? (
                                <CartLength>
                                    {cart.length}
                                </CartLength>
                            ) : null}
                        </CartArea>
                    </Link>

                </Menu.Item>
            </Menu.ItemGroup>
        </MenuWrapper>
    );

};

export default TopHeader;

const MenuWrapper = styled(Menu)`
    color: black;
    border-top: 1px solid black;
    border-bottom: 1px solid gray;

    .menu-right .ant-menu-item-group-list {
        display: flex;
        margin-right: 20px;
    }

    .menu-left .ant-menu-item-group-list {
        display: flex;
    }
`;

const LinkedMenu = styled(Link)`
    margin: 0px 0px;
    color: blue;
`;

const CartArea = styled.span`
    .active {
        background: peachpuff;
        padding: 7px;
        border-radius: 25%;
    }
`;

const CartLength = styled.span`
    position: relative;
    top: -5px;
    left: -10px;
`;