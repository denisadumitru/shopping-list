import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@hooks';

const Divider = () => {
  const { colors } = useTheme();
  return <View style={[styles.divider, { backgroundColor: colors.lightGrey }]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
});
