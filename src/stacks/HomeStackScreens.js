import { createStackNavigator } from '@react-navigation/stack';
import React,{Component} from 'react'

import HomeScreen from '../screens/HomeScreen'
import Details from '../screens/Details'

export default function HomeStackScreens(){
    const HomeStack = createStackNavigator()

    return (
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={Details} />
            


        </HomeStack.Navigator>
    );
}
