import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddressType, initialStateType } from '../../types/address';

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
  },
});

export default AddressSlice.reducer;
export const { addAddresses } = AddressSlice.actions;
