import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

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
              <Text style={styles.infoTxt}>Book List</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTxt}>Add New</Text>
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
    borderColor: '#FFF',
  },
  compHeaderTxt: {
    color: '#FFF',
    fontSize: 24,
    justifyContent: 'center',
  },
  compBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#083b66',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  infoTab: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    borderWidth: 1,
    height: 100,
    borderColor: '#083b66',
  },
  infoBox: {
    backgroundColor: '#083b66',
    borderWidth: 5,
    width: '50%',
    height: '100%',
    borderColor: '#FFF',
    borderRadius: 10,
  },
  infoTxt: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
