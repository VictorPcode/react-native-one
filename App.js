import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import NavigationDrawer from "./src/navigation/NavigationDrawer";
import { AuthProvider } from './src/context/AuthContext';

// Importa la fuente personalizada
import { useFonts } from 'expo-font';

export default function App() {
  // Carga la fuente personalizada
  const [loaded] = useFonts({
    'Phudu-Regular': require('./assets/fonts/Phudu-Regular.ttf'), // Asegúrate de que la ruta sea correcta
  });

  if (!loaded) {
    // Si la fuente no se ha cargado, puedes tomar una acción alternativa
    // Puedes mostrar una fuente predeterminada o algún otro comportamiento
    return null;
  }

  // Configura la fuente predeterminada para todos los componentes Text
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: 'Phudu-Regular', color: '#fff', fontSize: 14 };

  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationDrawer />
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
  text: {
    fontFamily: 'Phudu-Regular', // El nombre de la fuente que configuraste
    fontSize: 24,
  },
});
