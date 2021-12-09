import React from 'react';
import { SvgXml } from 'react-native-svg';

import * as icons from '@assets/icons';
import { useTheme } from '@hooks';

type IconName = keyof typeof icons;
export interface IIcon {
  name: IconName;
  color?: any;
  size?: number;
}

const Icon = ({ name, size = 24, color }: IIcon) => {
  const { colors } = useTheme();
  return <SvgXml xml={icons[name]} height={size} width={size} color={color || colors.white} />;
};

export default Icon;
