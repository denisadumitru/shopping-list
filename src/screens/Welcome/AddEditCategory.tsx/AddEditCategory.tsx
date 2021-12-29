import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';

import isEqual from 'lodash/isEqual';

import { ObjectId } from 'bson';

import { styles as textStyles } from '@components/Text/Text';
import { Button, Card, Text } from '@components';
import { useNavigation, useTheme } from '@hooks';
import IconButton from '@components/Button/IconButton';
import { ProductCategoryType } from '@types';
import { ProductsStackParams, RouteNames } from '@navigation';
import { Modal } from '@components/Modal';
import useProductCategories from '@hooks/useProductCategories';

type ProductCategoryProps = {
  route: ProductsStackParams[RouteNames.AddEditCategory];
};

const AddEditCategory = ({ route }: ProductCategoryProps) => {
  const { category: initialCategory } = route.params || {};
  const newCategory = {
    id: new ObjectId(),
    name: '',
    items: [],
  };

  const { spacing, colors, sizes } = useTheme();
  const inputRef = useRef<TextInput>(null);
  const [category, setCategory] = useState(initialCategory || newCategory);
  const navigation = useNavigation();
  const [backModalVisible, setBackModalVisible] = useState(false);
  const [onDiscardPress, setOnDiscardPress] = useState<() => void>();
  const { addCategory } = useProductCategories();

  useEffect(() => {
    if (!initialCategory) inputRef?.current?.focus();
  }, []);

  // TODO this is not working
  // useEffect(
  //   () =>
  //     navigation.addListener('beforeRemove', (e) => {
  //       if (isEqual(initialCategory, category)) {
  //         return;
  //       }

  //       e.preventDefault();

  //       setBackModalVisible(true);
  //       setOnDiscardPress(() => {
  //         navigation.dispatch(e.data.action);
  //         setBackModalVisible(false);
  //       });
  //     }),
  //   [navigation, initialCategory, category]
  // );

  const onNameChange = (newName: string) => {
    setCategory((cat) => ({ ...cat, name: newName }));
  };

  const onClosePress = () => {
    setBackModalVisible(false);
  };

  const onSavePress = () => {
    addCategory(category);
    setBackModalVisible(false);
    navigation.goBack();
  };

  const onDeletePress = () => {};

  return (
    <>
      <View
        style={[styles.titleWrapper, { paddingVertical: spacing.l, paddingHorizontal: spacing.m }]}
      >
        <TextInput
          ref={inputRef}
          style={[
            textStyles.H2,
            {
              marginBottom: spacing.s,
            },
          ]}
          value={category?.name}
          onChangeText={onNameChange}
          placeholder={'New category name'}
          multiline
        />
      </View>
      <View style={[styles.actions, { padding: spacing.m }]}>
        <Button onPress={onSavePress} style={styles.actionButton} text="Save" />
        {/* <Button style={styles.actionButton} type="secondary" text="Cancel" /> */}
        {initialCategory && (
          <Button textStyle={{ color: colors.error }} type="secondary" text="Delete category" />
        )}
      </View>

      <Modal
        title="Save changes"
        description="Do you want to save changes?"
        mainActionText="Save"
        secondaryActionText="Discard"
        onMainActionClick={onSavePress}
        onSecondaryActionClick={onDiscardPress}
        visible={backModalVisible}
      />
    </>
  );
};

export default AddEditCategory;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  actions: {
    // marginTop: 20,
  },
  save: {
    textAlign: 'center',
  },
  actionButton: {
    marginBottom: 16,
  },
});
