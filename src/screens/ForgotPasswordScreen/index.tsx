import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ForgotPasswordScreen = () => {
  return (
    <View   style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
})