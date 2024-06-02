import { AddressType } from '../types/address';

enum StackScreens {
  AddressList = 'Addreslerim',
  AddNewAddress = 'Adres Ekle',
  Splash = 'Splash Screen',
}

type RootStackParamList = {
  [StackScreens.AddressList]: undefined;
  [StackScreens.AddNewAddress]: { passedAddress: AddressType } | undefined;
  [StackScreens.Splash]: undefined;
};

export { RootStackParamList, StackScreens };
