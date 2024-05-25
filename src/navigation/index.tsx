import { createStackNavigator } from '@react-navigation/stack';
import AddressList from '../screens/addressList';
import Header from '../components/Header';
import AddNewAddress from '../screens/addNewAddress';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name='address list' component={AddressList} />
      <Stack.Screen name='add new address' component={AddNewAddress} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
