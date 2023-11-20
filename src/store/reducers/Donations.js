import {createSlice} from '@reduxjs/toolkit';
import {categoriesItems} from '../../utils/categoriesItems';

const initialState = {
  items: categoriesItems,
  selectedDonationId: null,
  selectedDonationInformation: {},
};

export const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
  },
});

export const {resetDonations, updateSelectedDonationId} = Donations.actions;
