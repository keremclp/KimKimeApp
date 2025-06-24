import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../types'
import { Colors } from '../../constants/Colors'

// Screens
import HomeScreen from '../../screens/HomeScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import SettingsScreen from '../../screens/SettingsScreen'
import NotificationsScreen from '../../screens/NotificationsScreen'

// Custom Tab Bar
import CustomTabBar from '../../components/CustomTabBar'

const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabStacks = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.headerBackground,
        },
        headerTintColor: Colors.headerText,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
      />
      <Tab.Screen 
        name="Notifications" 
        component={NotificationsScreen}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
      />
    </Tab.Navigator>
  )
}

export default BottomTabStacks