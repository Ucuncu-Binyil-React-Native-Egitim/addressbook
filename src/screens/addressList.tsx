import { View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, StackScreens } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import Text from '../components/Text';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AddressType } from '../types/address';
import Location from '../../assets/icons/location';
import ArrowRight from '../../assets/icons/arrowRight';
type RenderItemType = {
  item: {
    index: number;
    item: AddressType;
  };
};

const width = Dimensions.get('window').width;
const padding = 20;
const inlinePadding = 16;
const iconSize = 40;
const cardWidth = width - padding * 2;
const textContainer = cardWidth - (inlinePadding * 2 + iconSize);

const AddressList = () => {
  const { navigate } =
    useNavigation<
      StackNavigationProp<RootStackParamList, StackScreens.AddressList>
    >();
  const { addresses } = useSelector((state: RootState) => state.address);

  const RenderItem = ({ item }: RenderItemType) => {
    return (
      <TouchableOpacity
        style={{
          padding: inlinePadding,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Location width={iconSize} height={iconSize} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            maxWidth: textContainer,
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              maxWidth: textContainer / 2,
              marginLeft: 16,
            }}
          >
            <Text numberOfLines={1}>{item.item.addressTitle}</Text>
            <Text numberOfLines={1}>{item.item.addressDetails}</Text>
          </View>
          <View
            style={{
              maxWidth: textContainer / 2,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text numberOfLines={1}>
              {item.item.district + '/' + item.item.city}
            </Text>
            <ArrowRight width={16} height={16} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ padding }}>
        <Text fontType='medium16' style={{ marginBottom: 10 }}>
          My Addresses
        </Text>
        <FlatList
          data={addresses}
          renderItem={(item) => <RenderItem item={item} />}
          style={{
            borderWidth: 1,
            borderColor: '#e1e2e6',
            borderRadius: 8,
          }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: width - 72,
                height: 1,
                alignSelf: 'center',
                backgroundColor: '#e1e2e6',
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default AddressList;
