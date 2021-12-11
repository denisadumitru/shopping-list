import React from 'react';
import { ColorValue, Text as RNText, TextProps, StyleSheet } from 'react-native';

import theme from '@constants/defaultTheme';

export interface IText extends TextProps {
  as?: 'H1' | 'H2' | 'H3' | 'H4' | 'P1' | 'P2' | 'P3';
  color?: ColorValue;
}

const { PRIMARY_FONT_REGULAR, PRIMARY_FONT_BOLD, PRIMARY_FONT_SEMI } = theme.fonts;

export const Text = ({ children = '', as = 'P1', color, ...restProps }: IText) => {
  const baseStyle = {
    color: '',
  };

  return (
    <RNText style={[baseStyle, styles[as], { color }]} {...restProps}>
      {children}
    </RNText>
  );
};

export const styles = StyleSheet.create({
  H1: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 30,
    lineHeight: 41,
  },
  H2: {
    fontFamily: PRIMARY_FONT_SEMI,
    fontSize: 24,
    lineHeight: 33,
  },
  H3: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 16,
    lineHeight: 20,
  },
  H4: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 14,
    lineHeight: 19,
  },
  P1: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 16,
    lineHeight: 20,
  },
  P2: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 14,
    lineHeight: 19,
  },
  P3: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 10,
    lineHeight: 14,
  },
});

export default Text;
