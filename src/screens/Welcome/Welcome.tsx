import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Stacks } from '@navigation';
import { useNavigation, useTheme } from '@hooks';
import { Text } from '@components';

const Welcome = () => {
  const { navigate } = useNavigation();
  const { spacing, colors, sizes } = useTheme();

  const onNavigatePress = () => {
    navigate(Stacks.Dashboard);
  };

  return (
    <View style={styles.screen}>
      <Text style={{ marginBottom: spacing.m }}>Welcome screen</Text>
      <TouchableOpacity
        style={{
          padding: spacing.m,
          backgroundColor: colors.primary,
          borderRadius: sizes.borderRadius,
        }}
        onPress={onNavigatePress}
      >
        <Text color={colors.white} as="H3">
          Navigate to Dashboard
        </Text>
      </TouchableOpacity>
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
});
