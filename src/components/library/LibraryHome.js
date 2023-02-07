import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LibraryHome = () => {
  return (
    <View style={styles.compContainer}>
      <View style={styles.compHeader}>
        <Text style={styles.compHeaderTxt}>Library</Text>
      </View>
      <View style={styles.compBox}>
        <ScrollView>
          <View style={styles.infoTab}>
            <View style={styles.infoBox}>
              <View style={styles.infoIcon}>
                <Icon name="list-alt" size={40} color="#FFF" />
              </View>
              <View style={styles.infoTxtBox}>
                <Text style={styles.infoTxt}>Book List</Text>
              </View>
            </View>
            <View style={styles.infoBox}>
              <View style={styles.infoIcon}>
                <Icon name="book" size={40} color="#FFF"/>
              </View>
              <View style={styles.infoTxtBox}>
                <Text style={styles.infoTxt}>Add New</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoTab}>
            <View style={styles.infoBox}>
              <View style={styles.infoIcon}>
                <Icon name="book" size={40} color="#FFF" />
              </View>
              <View style={styles.infoTxtBox}>
                <Text style={styles.infoTxt}>Book List</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LibraryHome;

const styles = StyleSheet.create({
  compContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
  },
  compHeader: {
    flexDirection: 'column',
    backgroundColor: '#083b66',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    borderWidth: 2,
    borderColor: '#849db2',
  },
  compHeaderTxt: {
    color: '#FFF',
    fontSize: 24,
    justifyContent: 'center',
  },
  compBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#083b66',
  },
  infoTab: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    borderWidth: 0,
    height: 100,
    borderColor: '#083b66',
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderWidth: 8,
    width: '50%',
    height: '100%',
    borderColor: '#FFF',
  },
  infoIcon: {
    backgroundColor: '#083b66',
    borderWidth: 0,
    width: '30%',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderTopLeftRadius: 20,
    paddingLeft: 8,
    //borderBottomLeftRadius: 20,
  },
  infoTxtBox: {
    backgroundColor: '#083b66',
    borderWidth: 0,
    width: '70%',
    height: '100%',
    borderColor: '#FFF',
    justifyContent: 'center',
    //borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  infoTxt: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
  },
});
