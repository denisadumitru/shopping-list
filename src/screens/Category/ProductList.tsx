import React from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Card, Image, Text } from '@components';
import IconButton from '@components/Button/IconButton';
import { useTheme } from '@hooks';

type ProductListProps = {
  // TODO type
  items: unknown;
};

const ProductList = ({ items }: ProductListProps) => {
  const { spacing, colors, sizes } = useTheme();

  const listItems =
    items?.slice(0, 5).map((item) => ({
      ...item,
    })) || [];

  // const onItemPress;

  const qtyEditBtnStyle = {
    padding: spacing.xs,
    borderColor: colors.lightGrey,
    borderRadius: sizes.borderRadius,
    borderWidth: 2,
  };

  return (
    <FlatList
      data={listItems}
      keyExtractor={(item) => String(item.name)}
      style={styles.list}
      renderItem={({ item }) => (
        <Card style={[styles.card, { marginBottom: spacing.s, padding: spacing.m }]}>
          <View style={styles.cardTitleWrapper}>
            <Text as="H2">{item.title}</Text>
            <View>
              <View style={styles.buttons}>
                <IconButton
                  // onPress={onEditPress}
                  name="minus"
                  iconSize={24}
                  style={[styles.incDec, qtyEditBtnStyle]}
                />
                <TextInput
                  style={[
                    styles.qtyInput,
                    { backgroundColor: colors.lightGrey, borderRadius: sizes.borderRadius - 2 },
                  ]}
                  value={String(1)}
                />
                <IconButton
                  // onPress={onEditPress}
                  name="plus"
                  iconSize={24}
                  style={[styles.incDec, qtyEditBtnStyle]}
                />
              </View>
              {/* <Text as="P2" style={styles.unit}>
                kg / pc
              </Text> */}
            </View>
          </View>
          <Image style={{ position: 'absolute', zIndex: -1, opacity: 0.2 }} source={item.imgPath} />
        </Card>
      )}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  cardTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
  },
  list: {
    overflow: 'visible',
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
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unit: {
    textAlign: 'center',
  },
  qtyInput: {
    fontSize: 16,
    marginHorizontal: 8,
    minWidth: 32,
    height: 30,
    textAlign: 'center',
  },
  incDec: {},
});
