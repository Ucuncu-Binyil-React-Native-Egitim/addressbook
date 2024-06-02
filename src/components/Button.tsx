import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import Text from './Text';
export enum ButtonTypes {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type: ButtonTypes;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  style,
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const styles = StyleSheet.create({
    primary: {
      borderRadius: 6,
      padding: 20,
      backgroundColor: '#019693',
      alignItems: 'center',
    },
    primaryDisabled: {
      padding: 20,
      borderRadius: 6,
      alignItems: 'center',
      backgroundColor: '#b0b0b0',
    },
    primaryText: {
      color: '#ffffff',
    },
    primaryDisabledText: {
      color: '#485251',
    },
    secondary: {},
    secondaryDisabled: {},
    secondaryText: {},
    secondaryDisabledText: {},
  });

  const getButtonStyle = () => {
    switch (type) {
      case ButtonTypes.Secondary:
        return disabled || loading
          ? styles.secondaryDisabled
          : styles.secondary;
      default:
        return disabled || loading ? styles.primaryDisabled : styles.primary;
    }
  };

  const getButtonTextStyle = () => {
    switch (type) {
      case ButtonTypes.Secondary:
        return disabled || loading
          ? styles.secondaryDisabledText
          : styles.secondaryText;
      default:
        return disabled ? styles.primaryDisabledText : styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      style={[getButtonStyle(), style]}
      onPress={onPress}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text fontType={'medium16'} style={getButtonTextStyle()}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
