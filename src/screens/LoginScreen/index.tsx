import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { Iconify } from 'react-native-iconify';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Redux hooks
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useLoginMutation } from '../../store/services/authApi';
import { setRememberMe } from '../../store/slices/authSlice';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  
  const [login, { isLoading, error }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const rememberMe = useAppSelector((state) => state.auth.rememberMe)
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // await login({
      //   phoneNumber,
      //   password,
      //   rememberMe
      // }).unwrap()
      
      // Navigation will happen automatically due to auth state change
      navigation.navigate('Main', { screen: 'Home' })
    } catch (err) {
      // Handle error
      Alert.alert('Error', 'Login failed')
    }
  }
  
  const handleRememberMeToggle = () => {
    dispatch(setRememberMe(!rememberMe));
  };

  const handleRegisterPress = () => {
    navigation.navigate('Auth', { screen: 'Register' });
  };

  return (
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo-saydam.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Tekrar Hoşgeldiniz</Text>
            <Text style={styles.subtitle}>Hesabınıza giriş yapın</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Telefon Numaranız"
                placeholderTextColor="#999"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="Şifreniz"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
            {/* Navigate to ForgotPassword screen and remember me */}
            <View style={styles.forgotPasswordContainer}>
              <View>
                <TouchableOpacity style={styles.rememberMeContainer} onPress={handleRememberMeToggle}>
                  {rememberMe ? (
                    <Iconify
                      icon="mdi:checkbox-marked"
                      size={24}
                      color="#007AFF"
                    />
                  ) : (
                    <Iconify
                      icon="mdi:checkbox-blank-outline"
                      size={24}
                      color="#999"
                    />
                  )}
                  <Text style={styles.rememberMeText}>Remember Me</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'ForgotPassword' })}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              {isLoading && <ActivityIndicator style={styles.loadingIcon} />}
              <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>
            
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={handleRegisterPress}>
                <Text style={styles.registerLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    
  );
};

export default LoginScreen;
