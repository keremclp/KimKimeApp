import React from 'react'
import { StyleSheet } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from './types'

// Stacks
import AuthStacks from './Stacks/AuthStacks'
import BottomTabStacks from './Stacks/BottomTabStacks'

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
        <Stack.Screen name="Main" component={BottomTabStacks} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})