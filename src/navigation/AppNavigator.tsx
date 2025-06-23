import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from './types'

// Screens
import HomeScreen from '../screens/HomeScreen'

// Stacks
import AuthStacks from './Stacks/AuthStacks'


const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Auth"}
      >
        <Stack.Screen name="Auth" component={AuthStacks} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})