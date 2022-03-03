import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { useTheme } from '@hooks';

const Card = ({ children, style, ...rest }: ViewProps) => {
  const { colors, sizes } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          shadowColor: colors.shadowColor,
          backgroundColor: colors.white,
          borderRadius: sizes.borderRadius,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.02,
    shadowRadius: 3,
  },
});
