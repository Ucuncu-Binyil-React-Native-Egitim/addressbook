import { createStackNavigator } from '@react-navigation/stack';
import AddressList from '../screens/addressList';
import Header from '../components/Header';
import AddNewAddress from '../screens/addNewAddress';
import { RootStackParamList, StackScreens } from './types';
import Splash from '../screens/Splash';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen
        name={StackScreens.Splash}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={StackScreens.AddressList} component={AddressList} />
      <Stack.Screen
        name={StackScreens.AddNewAddress}
        component={AddNewAddress}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
