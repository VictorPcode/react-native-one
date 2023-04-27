
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import SettingScreens from '../screens/SettingScreens';
import Account from "../screens/Account";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Configuraciones" component={SettingScreens} />
      <Drawer.Screen name="Session" component={Account} />
    </Drawer.Navigator>
  );
}