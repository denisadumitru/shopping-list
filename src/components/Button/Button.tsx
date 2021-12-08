import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { useTheme } from '@hooks';

const Button = ({ children, style, ...rest }: TouchableOpacityProps) => {
  const { colors, sizes, spacing } = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.primary,
          borderRadius: sizes.borderRadius,
          paddingVertical: spacing.s,
          paddingHorizontal: spacing.l,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
