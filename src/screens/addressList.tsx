import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AddressList = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>AddressList</Text>
      <Button title='adres ekle' onPress={() => navigate('add new address')} />
    </View>
  );
};

export default AddressList;
