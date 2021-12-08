import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Stacks } from '@navigation';
import { useNavigation, useTheme } from '@hooks';
import { Card, Text } from '@components';
import { ProductCategoriesProvider } from '@providers';
import { ProductCategoryType } from '@types';

const Welcome = () => {
  const { navigate } = useNavigation();
  const { spacing, colors, sizes } = useTheme();
  const { categories } = ProductCategoriesProvider.useState();

  const renderCategory = ({ item: category }: { item: ProductCategoryType }) => {
    return (
      <Card style={[styles.categoryCard, { marginBottom: spacing.m, padding: spacing.m }]}>
        <Text as="H2">{category.name}</Text>
      </Card>
    );
  };

  return (
    <View style={[styles.screen, { marginHorizontal: spacing.m, paddingVertical: spacing.xl }]}>
      <FlatList style={[styles.categoryList]} data={categories} renderItem={renderCategory} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryList: {
    flex: 1,
    width: '100%',
  },
  categoryCard: {
    height: 120,
  },
});
