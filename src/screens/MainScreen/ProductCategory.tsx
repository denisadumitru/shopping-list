import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import { ProductCategoryType } from '@types';
import { Card, Text } from '@components';
import IconButton from '@components/Button/IconButton';
import { useTheme } from '@hooks';

type ProductCategoryProps = {
  item: ProductCategoryType;
  onPress: () => void;
  onEditPress: () => void;
  cardStyle: ViewStyle;
};

const ProductCategory = ({
  item: category,
  onPress,
  onEditPress,
  cardStyle,
}: ProductCategoryProps) => {
  const { spacing, colors, sizes } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={[cardStyle, { marginBottom: spacing.m, padding: spacing.m }]}>
        <View style={styles.cardTitleWrapper}>
          <Text as="H2">{category.name}</Text>
          <IconButton
            onPress={onEditPress}
            name="edit"
            iconSize={20}
            style={{ padding: spacing.xs }}
          />
        </View>
        <Text as="P2">{category.items?.length || 0} products</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  cardTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
});
