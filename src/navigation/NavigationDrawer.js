import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import SettingScreens from '../screens/SettingScreens';
import Account from "../screens/Account";
import useAuth from "../hooks/useAuth";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Drawer = createDrawerNavigator();



export default function NavigationDrawer() {
  const { auth } = useAuth();

  const openDrawer = () => {
    console.log('me preparo para ser el carrito')
  };

  return (
    <Drawer.Navigator>
      {auth ? (
        <>
         <Drawer.Screen
          name="Inicio"
          component={Home}
          options={{
            title: "Inicio",
            headerStyle: {
              backgroundColor: '#2e716e', 
            },
            headerTitleStyle: {
              color: 'white', 
            },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: true,
            headerRight: () => (
              <View style={{ flexDirection: 'row', padding: 16 }}>
                <TouchableOpacity onPress={openDrawer}>
                  <View style={{ marginLeft: 15 }}>
                    <Ionicons  name="cart-outline" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            ),
          }}
        />


          <Drawer.Screen name="Configuraciones" component={SettingScreens} />
          <Drawer.Screen name="Session" component={Account} />
        </>
      ) : (
        <>
          <Drawer.Screen name="Inicio" component={Home} 
          options={{
            headerStyle: {
              backgroundColor: '#2e716e', 
            },
            headerTitleStyle: {
              color: 'white', 
            },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: true,
          }}
          />
          <Drawer.Screen name="Session" component={Account} />
        </>
      )}
    </Drawer.Navigator>
  );
}
