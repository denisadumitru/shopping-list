import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteNames } from '@navigation';
import { MainScreen, Category } from '@screens';
import AddEditCategory from '@screens/MainScreen/AddEditCategory/AddEditCategory';
import { Icon } from '@components';
import { useTheme } from '@hooks';
const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  const { colors } = useTheme();

  const options = {
    headerStyle: {
      backgroundColor: colors.primary,
      color: colors.white,
    },
    headerBackImage: () => <Icon name="backArrow" color={colors.white} />,
    headerBackTitle: '',
    headerTintColor: colors.white,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.ProductsMainScreen} component={MainScreen} options={options} />
      <Stack.Screen
        name={RouteNames.AddEditCategory}
        component={AddEditCategory}
        options={{ ...options, title: 'Category' }}
      />
      <Stack.Screen
        name={RouteNames.Category}
        component={Category}
        options={{ ...options, title: 'Category' }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;
