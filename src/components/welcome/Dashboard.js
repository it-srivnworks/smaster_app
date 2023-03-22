import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.dashboardBG}>
      <Text>Dashboard !</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardBG: {
    flex: 1,
    backgroundColor: '#083b66',
  },
});
