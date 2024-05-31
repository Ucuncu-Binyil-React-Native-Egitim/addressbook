import { Button as RNButton } from 'react-native';

enum ButtonType {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

interface IButton {
  onPress: () => void;
  title: string;
  disable?: boolean;
  buttonType?: ButtonType;
}

export const Button: React.FC<IButton> = ({
  title,
  onPress,
  disable = false,
  buttonType = ButtonType.Primary,
}) => {
  return <RNButton title={title} onPress={onPress} disabled={disable} />;
};
