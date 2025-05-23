import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  addresses: [],
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    clearAddress: state => {
      state.addresses = [];
    },
  },
});

export const {addAddress, clearAddress} = addressSlice.actions;
export default addressSlice.reducer;
