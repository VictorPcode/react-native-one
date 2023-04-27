import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput style={{color:'white', width: 350}} placeholder="Email" />
      <TextInput style={{color:'white'}} maxLength={21}  placeholder="Contraseña" />
      <Button title="Entrar" onPress={() => console.log("Enviado")} />
    </View>
  );
}