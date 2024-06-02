import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ArrowLeft from '../../assets/icons/arrowLeft';
import Text from './Text';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const Header = (route: any) => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <LinearGradient colors={['#220C45', '#440E85']}>
      <StatusBar style='light' />
      <View style={[styles.headerContainer, { paddingTop: top }]}>
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
            <ArrowLeft />
          </TouchableOpacity>
        )}
        <Text fontType='regular24' style={{ color: '#C2BBCF' }}>
          {route.route.name}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
  },
});

export default Header;
