import react from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import SettingScreens from '../screens/SettingScreens'



const Tab  =  createBottomTabNavigator();
// console.log(Tab)
export default function NavigationTab(){

    <Tab.Navigator>
       <Tab.Screen name='Home' component={Home}/>
       <Tab.Screen name='Settings' component={SettingScreens}/>
    </Tab.Navigator>

}