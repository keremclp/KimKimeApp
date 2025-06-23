import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
// navigation
import { useNavigation } from '@react-navigation/native'
import { AuthStackParamList } from '../../navigation/types'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';



const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleButtonPress = () => {
    navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5 }}
        onPress={handleButtonPress}
      >
        <Text style={{ color: '#fff' }}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen