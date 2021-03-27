import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from '../../Redux/Login/LoginActions';

const LoginPage = () => {
    // const user = useSelector((state) => state.LoginReducer);
    const history = useHistory();
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log('Success:', values);
        const userData = {
            email: values.email,
            password: values.password
        }
        dispatch(userLogin(userData))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormWrapper>
            <Title>Login</Title>
            <Text>Don't have an account? Sign in <Link to="/users/create">Here</Link> </Text>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

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

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default LoginPage;

const FormWrapper = styled.div`
    margin: 0 auto;
    padding-top: 50px;
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