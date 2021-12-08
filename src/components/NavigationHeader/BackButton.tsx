import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HeaderBackButtonProps } from '@react-navigation/elements';

import { Icon } from '@components';

const BackButton = ({ tintColor }: HeaderBackButtonProps) => {
  return (
    <TouchableOpacity>
      <Icon name="backArrow" color={tintColor} />
    </TouchableOpacity>
  );
};

export default BackButton;
