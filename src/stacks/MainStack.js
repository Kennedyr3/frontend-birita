import React from 'react';
import { createStackNavigator }  from '@react-navigation/stack';

import Preload from '../Screens/Preload';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default () => (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
    
    <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
    </>
);