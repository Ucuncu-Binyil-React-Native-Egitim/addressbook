import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
