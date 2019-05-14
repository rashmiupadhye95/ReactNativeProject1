import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashBoardPage from '../pages/DashboardPage';




const Route = createStackNavigator(
    {
        Login:{
            screen: LoginPage,
            navigationOptions: {
                header: null,
              },
        } ,
        Register: {
            screen: RegisterPage,
            navigationOptions: {
                header: null,
              },
        },
        Dashboard: {
            screen: DashBoardPage,
            navigationOptions: {
                header: null,
              },
        },
    },
    {
        initialRouteName: 'Login'
    }
);

const RouterConfig = createAppContainer(Route);
export default RouterConfig;