import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { useTheme } from '@hooks';
import { Icon } from '@components';
import { IIcon } from '@components/Icon/Icon';

type IconButtonProps = TouchableOpacityProps & {
  color?: IIcon['color'];
  name: IIcon['name'];
  iconSize?: IIcon['size'];
};

const IconButton = ({ name, color, iconSize, style, ...rest }: IconButtonProps) => {
  const { colors, sizes, spacing } = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          paddingHorizontal: spacing.xs,
        },
        styles.button,
        style,
      ]}
      {...rest}
    >
      <Icon color={color || colors.darkGrey} size={iconSize} name={name} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
  },
});

export default IconButton;
