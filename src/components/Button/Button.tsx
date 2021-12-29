import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, TextStyle } from 'react-native';

import { useTheme } from '@hooks';
import { Text } from '@components';

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  textStyle?: TextStyle;
  type?: 'primary' | 'secondary';
}

const Button = ({ children, style, text, textStyle, type, ...rest }: ButtonProps) => {
  const { colors, sizes, spacing } = useTheme();

  const primaryButtonTextStyle = [styles.text, { color: colors.white }, textStyle];
  const secondaryButtonTextStyle = [styles.text, { color: colors.primary }, textStyle];

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: type !== 'secondary' ? colors.primary : 'none',
          borderRadius: sizes.borderRadius,
          paddingVertical: spacing.s,
          paddingHorizontal: spacing.l,
        },
        style,
      ]}
      {...rest}
    >
      {text ? (
        <Text
          as="BTN"
          style={type !== 'secondary' ? primaryButtonTextStyle : secondaryButtonTextStyle}
        >
          {text}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});

export default Button;
