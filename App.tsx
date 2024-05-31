import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Light: require('./assets/fonts/Roboto-Light.ttf'),
    Thin: require('./assets/fonts/Roboto-Thin.ttf'),
    Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Medium: require('./assets/fonts/Roboto-Medium.ttf'),
    Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    Black: require('./assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
