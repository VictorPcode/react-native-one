import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import SettingScreens from '../screens/SettingScreens'

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Settings' component={SettingScreens}/>
        </Stack.Navigator>
    )
}