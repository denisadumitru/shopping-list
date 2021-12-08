import React, { useRef, useState, useEffect } from 'react';
import { SvgXml } from 'react-native-svg';

import * as icons from '@assets/icons';
import { backArrow } from '@assets/icons/backArrow';

import { useTheme } from '@hooks';

export interface IIcon {
  name: string;
  color?: any;
  size?: number;
}

const Icon = ({ name, size = 24, color }: IIcon) => {
  const { colors } = useTheme();
  return <SvgXml xml={icons[name]} height={size} width={size} color={color || colors.white} />;
};

export default Icon;
