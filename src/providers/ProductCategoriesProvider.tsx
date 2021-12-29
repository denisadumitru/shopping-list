import { createSlice } from '@reduxjs/toolkit';
import { ObjectId } from 'bson';

import createProvider from './BaseProvider';

import { ProductCategoryType } from '@types';

const initialState: { categories: ProductCategoryType[] } = {
  categories: [
    // {
    //   id: new ObjectId(),
    //   name: 'Sweet fruits',
    //   items: [],
    // },
    // {
    //   id: new ObjectId(),
    //   name: 'Sour fruits',
    //   items: [],
    // },
  ],
};

const slice = createSlice({
  name: 'ProductCategories',
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      state.categories = payload;
    },
  },
});

export default createProvider({ slice, initialState });
