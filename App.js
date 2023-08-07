import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SocialLoginScreen from './screens/auth/SocialLoginScreen'
import DetailScreen from './screens/auth/DetailScreen/DetailScreen'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      {/* <SocialLoginScreen/> */}
      <DetailScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})