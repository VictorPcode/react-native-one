import {Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

export default function SettingScreens(props) {
  const {navigation} = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }
  return (
    <SafeAreaView >
      <Text>Configuraciones</Text>
    </SafeAreaView>
  )
}