import React from 'react';
import { SvgXml } from 'react-native-svg';

import * as iconAssets from '@assets/icons';
import * as illustrations from '@assets/illustrations';
import { useTheme } from '@hooks';

type IconName = keyof typeof iconAssets | keyof typeof illustrations;

const icons = { ...iconAssets, ...illustrations };
export interface IIcon {
  name: IconName;
  color?: any;
  size?: number;
  width?: number;
  height?: number;
}

const Icon = ({ name, size = 24, width = size, height = size, color }: IIcon) => {
  const { colors } = useTheme();
  return <SvgXml xml={icons[name]} height={height} width={width} color={color || colors.white} />;
};

export default Icon;
