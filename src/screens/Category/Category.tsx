import React, { useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { useQuery } from 'react-query';

import SuggestionsList from './SuggestionsList';

import ProductList from './ProductList';

import { useNavigation, useTheme } from '@hooks';
import { ProductsStackParams, RouteNames } from '@navigation';
import { getMockProducts } from '@services/productsMockApi';
import { Text } from '@components';

type CategoryProps = {
  route: ProductsStackParams[RouteNames.Category];
};

const Category = ({ route }: CategoryProps) => {
  const { category } = route.params || {};

  const { data, isLoading, error } = useQuery('allProducts', getMockProducts);
  const navigation = useNavigation();
  const { spacing } = useTheme();

  useEffect(() => {
    navigation.setOptions({ title: category.name });
  }, []);

  return (
    <View style={[styles.container, { paddingHorizontal: spacing.s }]}>
      <View style={styles.listContent}>
        <ProductList items={data} />
      </View>
      <SuggestionsList items={data} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
  },
  listContent: {
    flex: 1,
  },
});
