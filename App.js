import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import NavigationDrawer from "./src/navigation/NavigationDrawer";
import {AuthProvider} from './src/context/AuthContext'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <NavigationDrawer/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#034665",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
