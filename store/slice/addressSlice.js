import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  phoneNumber: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zipCode = action.payload.zipCode;
      state.phoneNumber = action.payload.phoneNumber;
    },
    clearAddress: () => initialState,
  },
});

export const {addAddress, clearAddress} = addressSlice.actions;
export default addressSlice.reducer;
