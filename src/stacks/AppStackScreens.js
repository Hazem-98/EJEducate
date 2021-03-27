import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';

import AuthStackScreens from './AuthStackScreens'
import MainStackScreens from './MainStackScreens'
import LoadingScreen from '../screens/LoadingScreen'


import {UserContext, UserProvider} from '../context/UserContext'

export default function AppStackScreens(){
    const AppStack = createStackNavigator()
    const [user] = useContext(UserContext)

    return (
        <AppStack.Navigator headerMode="none">
            {user.isLoggedIn === null ? (
                <AppStack.Screen name="Loading" component={LoadingScreen} />
            ) : user.isLoggedIn ? ( 
                <AppStack.Screen name="Main" component={MainStackScreens} />

            ) : (
                <AppStack.Screen name="Auth" component={AuthStackScreens} />

            )}
            
        </AppStack.Navigator>
    );
};

