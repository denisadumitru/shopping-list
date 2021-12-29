import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ProductCategory from './ProductCategory';

// TODO remove?
import AddCategoryCard from './AddCategoryCard';

import { useNavigation, useTheme } from '@hooks';
import { ProductCategoriesProvider } from '@providers';
import IconButton from '@components/Button/IconButton';
import { RouteNames } from '@navigation';
import { ProductCategoryType } from '@types';
import useProductCategories from '@hooks/useProductCategories';
import { Text } from '@components';

const Welcome = () => {
  const { navigate, push } = useNavigation();
  const { spacing, colors } = useTheme();
  const { categories } = ProductCategoriesProvider.useState();
  const { addCategory, getCategories } = useProductCategories();

  const [showTempCategory, setShowTempCategory] = useState(false);

  useEffect(() => {
    console.log('mounted Welcome');
    getCategories();
  }, []);

  const onAddCategoryPress = () => {
    navigate(RouteNames.AddEditCategory);
  };

  const onEditCategoryPress = (category: ProductCategoryType) => {
    push(RouteNames.AddEditCategory, { category });
  };

  const onCategoryPress = (category: ProductCategoryType) => {};

  return (
    <View style={[styles.screen, { marginHorizontal: spacing.m, paddingVertical: spacing.xl }]}>
      <View style={styles.categoriesWrapper}>
        <FlatList
          style={[styles.categoryList]}
          data={categories}
          renderItem={(item) => (
            <ProductCategory
              {...item}
              cardStyle={styles.categoryCard}
              onPress={() => onCategoryPress(item.item)}
              onEditPress={() => onEditCategoryPress(item.item)}
            />
          )}
        />
      </View>

      <IconButton
        onPress={onAddCategoryPress}
        name="plus"
        color={colors.white}
        iconSize={32}
        style={[styles.addButton, { backgroundColor: colors.primary }]}
      />
    </View>
  );
};

export default Welcome;
// export default React.memo(Welcome);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  categoriesWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  categoryList: {
    overflow: 'visible',
    width: '100%',
  },
  addButton: {
    position: 'absolute',
    bottom: 24,
    width: 72,
    height: 72,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  categoryCard: {
    height: 120,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
});
