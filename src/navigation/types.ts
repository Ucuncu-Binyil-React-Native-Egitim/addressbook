enum StackScreens {
  AddressList = 'Addres Ekranı',
  AddNewAddress = 'Add New Address',
  Splash = 'Splash Screen',
}

type RootStackParamList = {
  [StackScreens.AddressList]: undefined;
  [StackScreens.AddNewAddress]: undefined;
  [StackScreens.Splash]: undefined;
};

export { RootStackParamList, StackScreens };
