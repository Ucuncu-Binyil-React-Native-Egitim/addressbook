import { View, ActivityIndicator, StatusBar, Image } from 'react-native';
import React, { useEffect } from 'react';
import Text from '../components/Text';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addAddresses } from '../store/features/addressSlice';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, StackScreens } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

const Splash = () => {
  const url = 'https://66532d51813d78e6d6d77614.mockapi.io/api/v1/adresses';
  const dispatch = useDispatch();
  const { navigate } =
    useNavigation<
      StackNavigationProp<RootStackParamList, StackScreens.Splash>
    >();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await axios.get(url);
        dispatch(addAddresses(res.data));
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          navigate(StackScreens.AddressList);
        }, 1500);
      }
    };

    // 2. adresleri store'a kaydet
    // 3. işlemler tamamlandıysa => adresslist ekranına git

    fetchAddresses();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingVertical: 80,
        paddingTop: 100,
      }}
    >
      <StatusBar hidden={true} />
      <Image
        source={require('../../assets/splash-logo.jpg')}
        style={{
          width: '100%',
          height: 300,
        }}
      />
      <View>
        <Text style={{ color: '#0f4A82', marginBottom: 20 }}>
          <Text fontType='regular22'>Sakın</Text>
          <Text fontType='bold22'> kaybolma!</Text>
        </Text>
        <ActivityIndicator size={'large'} />
      </View>
    </View>
  );
};

export default Splash;
