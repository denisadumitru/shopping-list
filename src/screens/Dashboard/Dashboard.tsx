import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useQuery } from 'react-query';

import { Button, Card, Text } from '@components';
import { SimpleProvider } from '@components/providers';
import { useTheme } from '@hooks';
import { productsApi } from '@services';

const Dashboard = () => {
  const { flag, toggleFlag } = SimpleProvider.useState();
  const { colors } = useTheme();
  const { data, isLoading, error } = useQuery('allProducts', productsApi.getAllProducts);

  return (
    <View style={[styles.screen, { backgroundColor: colors.white }]}>
      <Text>flag: {flag.toString()}</Text>
      <Button onPress={toggleFlag}>
        <Text>TOGGLE FLAG</Text>
      </Button>
      <Card style={{ height: 200 }}>
        <Text>some card text</Text>
      </Card>
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
