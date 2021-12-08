import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { createSlice } from '@reduxjs/toolkit';

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

const { actions, reducer } = slice;

type StateKeys = keyof typeof initialState;
type ActionKeys = keyof typeof actions;
type ContextKeys = ActionKeys | StateKeys;
type ContextValue = Partial<Record<ContextKeys, any>>;

const Context = createContext(initialState as ContextValue);

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actionsWithDispatch = Object.entries(actions).reduce(
    (acc: Record<string, any>, [actionKey, actionValue]) => {
      acc[actionKey] = (payload: any) => dispatch({ type: actionValue, payload });
      return acc;
    },
    {}
  );
  const value: ContextValue = {
    flag: state.flag,
    ...actionsWithDispatch,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useState = () => {
  const ctx = useContext(Context) as ContextValue;

  if (ctx === undefined) {
    throw new Error('useState is outside its corresponding Provider.');
  }

  return ctx;
};

export default { Provider, Context, useState };
