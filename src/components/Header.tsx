import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = (route: any) => {
  console.log('previous: ', route.progress.previous);
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { paddingTop: top }]}>
      <Text style={{ fontSize: 36 }}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
  },
});

export default Header;
