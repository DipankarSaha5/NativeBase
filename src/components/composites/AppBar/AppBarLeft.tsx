import React from 'react';
import { HStack, IStackProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const AppBarLeft = ({ ...props }: IStackProps) => {
  const { color } = useThemeProps('AppBar', props);
  return <HStack alignItems="center" color={color} {...props} />;
};

export default AppBarLeft;
