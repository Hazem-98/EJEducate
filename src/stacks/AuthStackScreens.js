import { createStackNavigator } from '@react-navigation/stack';
import React,{Component} from 'react'

import SignInScreen from '../screens/SignInscreen'
import SignUpScreen from '../screens/SignUpScreen'

export default function AuthStackScreens(){
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
            


        </AuthStack.Navigator>
    );
}


