import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard, Welcome } from '@screens';
import { Stacks } from '@navigation';
import useTheme from '@hooks/useTheme';
import { Icon } from '@components';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { colors } = useTheme();

  const options = {
    headerStyle: {
      backgroundColor: colors.primary,
      color: colors.tertiary,
    },
    headerBackImage: () => <Icon name="backArrow" color={colors.white} />,
    headerBackTitle: '',
    headerTintColor: colors.white,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={Stacks.Welcome} component={Welcome} />
        <Stack.Screen
          // options={{ header: () => null }}
          name={Stacks.Dashboard}
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
