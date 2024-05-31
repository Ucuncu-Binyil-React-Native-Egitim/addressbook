import { Text as RNText, TextStyle, StyleSheet, TextProps } from 'react-native';
import React, { ReactNode } from 'react';
import { FontStyleEnum } from './typography';
import { FontTheme } from './FontTheme';

interface TextType extends TextProps {
  fontType?: keyof typeof FontStyleEnum;
  children: string | ReactNode | ReactNode[];
  style?: TextStyle;
}

export const Text: React.FC<TextType> = ({
  fontType = 'regular14',
  style,
  children,
  ...props
}) => {
  return (
    <RNText style={StyleSheet.flatten([FontTheme[fontType], style])} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
