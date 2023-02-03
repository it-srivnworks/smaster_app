import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const CustomButton = (props) => {

  const onPress = () => {
    console.log('Button Pressed !')
    props.btnAction()
  }

  return (
    <View>
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
    </View> 
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#083b66',
  },
});
