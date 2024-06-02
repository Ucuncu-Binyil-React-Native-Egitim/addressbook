import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AddressType,
  CreatedAddress,
  initialStateType,
} from '../../types/address';

const initialState: initialStateType = {
  addresses: [],
};

const AddressSlice = createSlice({
  name: 'Address',
  initialState,
  reducers: {
    addAddresses: (state, action: PayloadAction<AddressType[]>) => {
      state.addresses = action.payload;
    },
    createAddress: (state, action: PayloadAction<AddressType>) => {
      state.addresses.push(action.payload);
    },
    updateAddress: (state, action: PayloadAction<AddressType>) => {
      const index = state.addresses.findIndex(
        (address) => address.id === action.payload.id
      );
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    deleteAddress: (state, action) => {
      const index = state.addresses.findIndex(
        (address) => address.id === action.payload
      );
      if (index !== -1) {
        state.addresses.splice(index, 1);
      }
    },
  },
});

export default AddressSlice.reducer;
export const { addAddresses, createAddress, updateAddress, deleteAddress } =
  AddressSlice.actions;
