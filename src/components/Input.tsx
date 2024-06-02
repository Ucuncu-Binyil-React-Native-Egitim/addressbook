import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type Props = TextInputProps & {
  value: string;
  onChangeText: (e: string) => void;
};

const Input: React.FC<Props> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#e1e2e6',
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default Input;
