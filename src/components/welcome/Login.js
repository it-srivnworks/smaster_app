import React from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../hooks/common/ui/CustomButton';

const Login = ({navigation}) => {
    const enterSiteHndlr = () => {
        navigation.navigate('welcome')
    };

    return (
    <View style={styles.welcomeBG}>
      <ScrollView style={styles.cScrollView}>
      <ScrollView style={styles.cScrollViewGAP200}>
        </ScrollView>
        <ScrollView style={styles.cScrollView}>
          <View style={styles.cView}>
            <Image
              source={require('../../../src/assets/images/srivn_logo.png')}
              style={styles.srivnLogo}></Image>
          </View>
        </ScrollView>
        <ScrollView style={styles.cScrollViewGAP10}>
        </ScrollView>
        <ScrollView style={styles.cScrollView}>
          <CustomButton btnAction={enterSiteHndlr}></CustomButton>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    welcomeBG: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#083b66',
    },
    cScrollView: {
      borderWidth: 0,
      borderColor: '#FFF',
    },
    cScrollViewGAP10: {
      borderWidth: 0,
      marginTop : 20,
    },
    cScrollViewGAP200: {
      borderWidth: 0,
      marginTop : 200,
    },
    cView: {
      marginTop : 20,
      marginBottom : 20,
      marginLeft : 20,
      marginRight : 20,
      //borderWidth: 2,
      borderColor: '#FFF',
    },
    srivnLogo: {
      height: 200,
      width: 200,
    },
    welcomeTxt: {
      fontSize: 24,
      color: '#FFF',
    },
  });
  
  //
  