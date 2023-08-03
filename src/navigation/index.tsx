import * as React from 'react'
import type { ColorSchemeName } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from '../types/Navigation'
import { Setting } from '../screens/Setting/Setting'
import { Download } from '../screens/DownLoad/Download' 
import { DownloadList } from '../screens/DownLoadList/DownloadList'

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Download'
    >
        <Stack.Screen name={'Download'} component={Download} />
        <Stack.Screen name={'DownloadList'} component={DownloadList} />
        <Stack.Screen name={'Setting'} component={Setting} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer
    >
      <RootNavigator />
    </NavigationContainer>
  )
}
