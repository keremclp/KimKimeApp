import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from './types'

// Screens
import HomeScreen from '../screens/HomeScreen'

// Stacks
import UserStacks from './Stacks/UserStacks'


const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"User"}
      >
        <Stack.Screen name="User" component={UserStacks} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})