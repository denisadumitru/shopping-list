import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '@components';

const Dashboard = () => {
  return (
    <View style={styles.screen}>
      <Text as="H2">Dashboard screen</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
