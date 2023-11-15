import {createSlice} from '@reduxjs/toolkit';
import {categories} from '../../utils/categories';

const initialState = {
  categories: categories,
  selectedCategoryId: 1,
};

export const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resteCategories: () => {
      return initialState;
    },
    updatedSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resteCategories, updatedSelectedCategoryId} = Categories.actions;
