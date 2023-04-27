import {Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export default function Home(props) {
  const {navigation} = props;
  const goToSettings = () =>{
    navigation.navigate('Configuraciones')
  }
  // console.log(props)

  return (
    <SafeAreaView >
      <Text>Inicio</Text>
    </SafeAreaView>
  )

  }