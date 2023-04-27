
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import SettingScreens from '../screens/SettingScreens';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Configuraciones" component={SettingScreens} />
    </Drawer.Navigator>
  );
}