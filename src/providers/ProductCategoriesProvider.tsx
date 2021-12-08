import { createSlice } from '@reduxjs/toolkit';

import createProvider from './BaseProvider';

import { ProductCategoryType } from '@types';

const initialState: { categories: ProductCategoryType[] } = {
  categories: [
    {
      name: 'Sweet fruits',
      items: [],
    },
    {
      name: 'Sour fruits',
      items: [],
    },
  ],
};

const slice = createSlice({
  name: 'ProductCategories',
  initialState,
  reducers: {
    addCategory(state, { payload }) {
      state.categories = [...state.categories, payload];
    },
  },
});

export default createProvider({ slice, initialState });
