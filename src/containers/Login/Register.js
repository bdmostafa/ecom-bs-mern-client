import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox, Image } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createUser } from '../../Redux/User/UserActions';
import logo from '../../assets/ebayLogo.png'

const Register = () => {
    const user = useSelector((state) => state.users?.user);

    const history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const userData = {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }
        await dispatch(createUser(userData))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (user?.name) {
        history.replace(from);
        // window.location.reload();
    }

    return (
        <FormWrapper>
            <Link to="/">
                <Image preview={false} src={logo} style={{marginLeft: '150px', width: '50%'}}/>
            </Link>
            <Title>Create an account</Title>
            <Text>Already have an account? Login <Link to="/users/login">Here</Link> </Text>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password again!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default Register;

const FormWrapper = styled.div`
    margin: 0 auto;
    padding: 110px;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    font-size: 18px;
`;

const Text = styled.p`
    color: black;
    text-align: center;
    font-size: 12px;
`;