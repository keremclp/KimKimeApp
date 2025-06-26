// User authentication stack
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import { AuthStackParamList } from '../types';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>(); 

const AuthStacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AuthStacks;


