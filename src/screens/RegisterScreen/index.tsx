import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Iconify } from 'react-native-iconify'
import { RootStackParamList } from '../../navigation/types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
const RegisterScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon}>
        <Iconify
          icon="mdi:arrow-left"
          size={24}
          color="#000"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Kayıt Ol</Text>
        <Text style={styles.subtitle}>Öncelikle sizi tanıyalım ve hesabınızı oluşturalım.</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput placeholder="Ad & Soyad" />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Ad & Soyad" />
        </View>

        <View style={styles.input}>
          <TextInput placeholder="E-posta adresi" />
        </View>

        <View style={styles.input}>
          <TextInput placeholder="Parola" secureTextEntry />
        </View>

        <View style={styles.input}>
          <TextInput placeholder="Parola (Tekrar)" secureTextEntry />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxRow}>
          {/* <CheckBox value={termsChecked} onValueChange={setTermsChecked} /> */}
          <Text>Şartlar ve Koşullarımızı ve Gizlilik Politikamızı kabul ediyorum.</Text>
        </View>

        <View style={styles.checkboxRow}>
          {/* <CheckBox value={marketingChecked} onValueChange={setMarketingChecked} /> */}
          <Text>Kişisel verilerimin … kullanılması izni veriyorum.</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Kaydol</Text>
      </TouchableOpacity>   
    </View>

  )
}

export default RegisterScreen
