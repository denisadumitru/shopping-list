import { createSlice } from '@reduxjs/toolkit';

import createProvider from './BaseProvider';

const initialState = {
  flag: false,
};

const slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    toggleFlag(state, action) {
      state.flag = !state.flag;
    },
  },
});

export default createProvider({ slice, initialState });
