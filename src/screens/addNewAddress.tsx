import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button, ButtonTypes } from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, StackScreens } from '../navigation/types';
import { AddressType } from '../types/address';
import Input from '../components/Input';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createAddress } from '../store/features/addressSlice';

const AddNewAddress = () => {
  const { params } =
    useRoute<RouteProp<RootStackParamList, StackScreens.AddNewAddress>>();
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const [state, setState] = useState<AddressType>({
    addressTitle: params?.passedAddress.addressTitle ?? '',
    addressDetails: params?.passedAddress.addressDetails ?? '',
    city: params?.passedAddress.city ?? '',
    district: params?.passedAddress.district ?? '',
    id: params?.passedAddress.id ?? '',
  });

  const saveAddress = async () => {
    try {
      const url = 'https://66532d51813d78e6d6d77614.mockapi.io/api/v1/adresses';
      const res = await axios.post(url, state);
      dispatch(createAddress(res.data));
    } catch (error) {
      console.log(error);
    } finally {
      goBack();
    }
  };

  const isDisable = () => {
    if (
      !state.addressDetails ||
      !state.addressTitle ||
      !state.city ||
      !state.district
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      <View style={{ padding: 20 }}>
        <Input
          placeholder='Address title'
          value={state.addressTitle}
          onChangeText={(e) => setState({ ...state, addressTitle: e })}
        />
        <Input
          placeholder='City'
          value={state.city}
          onChangeText={(e) => setState({ ...state, city: e })}
        />
        <Input
          placeholder='District'
          value={state.district}
          onChangeText={(e) => setState({ ...state, district: e })}
        />
        <Input
          placeholder='Address Details'
          value={state.addressDetails}
          onChangeText={(e) => setState({ ...state, addressDetails: e })}
        />
      </View>
      <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#e1e2e6' }}>
        <Button
          title={params?.passedAddress ? 'Güncelle' : 'Kaydet'}
          onPress={saveAddress}
          disabled={isDisable()}
          type={ButtonTypes.Primary}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddNewAddress;
