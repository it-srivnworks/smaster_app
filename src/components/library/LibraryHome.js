import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LibraryHome = () => {
  return (
    <View style={styles.compContainer}>
        <ScrollView>
          
        </ScrollView>
    </View>
  );
};

export default LibraryHome;

const styles = StyleSheet.create({
  compContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#083b66',
    justifyContent: 'flex-start',
  },
  compHeader: {
    flexDirection: 'column',
    backgroundColor: '#083b66',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '5%',
    borderWidth: 1,
    borderBottomColor: '#849db2',
  },
  compHeaderTxt: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Arial',
    justifyContent: 'center',
  }});
