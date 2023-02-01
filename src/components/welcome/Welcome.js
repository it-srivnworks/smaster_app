import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Welcome = () => {

    const enterSiteHndlr = () => {
        
      };

  return (
    <View
      style={styles.welcomeBG}>
      <Image source={require('../../../src/assets/images/srivn_logo.png')} style={styles.srivnLogo}></Image> 
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    welcomeBG: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#083b66',
      },
      srivnLogo: {
        height: 200,
        width: 200
      },
      welcomeTxt: {
        fontSize : 24,
        color: '#FFF'
      }
})