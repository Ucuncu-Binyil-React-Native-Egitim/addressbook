import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EvilIcons } from '@expo/vector-icons';
import Text from './Text';
import { Button } from './Button';

const Header = (route: any) => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop: top,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 16,
        },
      ]}
    >
      {route.progress.previous && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 24,
          }}
          onPress={() => goBack()}
        >
          <EvilIcons name='arrow-left' size={36} color='#007AFF' />
        </TouchableOpacity>
      )}
      <Text fontType='light36'>{route.route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
  },
});

export default Header;
