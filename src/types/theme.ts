import { ColorValue } from 'react-native';

export interface ThemeColors {
  text: ColorValue;
  primary: ColorValue;
  primary50: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  black: ColorValue;
  white: ColorValue;
  gray: ColorValue;
  lightGray: ColorValue;
  darkGray: ColorValue;
  background: ColorValue;
  error: ColorValue;
  warning: ColorValue;
  success: ColorValue;
}

export interface Sizes {
  borderRadius: number;
}

export interface Spacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface Fonts {
  PRIMARY_FONT_REGULAR: string;
  PRIMARY_FONT_SEMI: string;
  PRIMARY_FONT_BOLD: string;
}

export interface ITheme {
  colors: Partial<ThemeColors>;
  spacing: Spacing;
  fonts: Fonts;
}
