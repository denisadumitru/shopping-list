import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { Slice } from '@reduxjs/toolkit';

const createProvider = <S,>({ slice, initialState }: { slice: Slice; initialState: S }) => {
  const { actions, reducer } = slice;

  const Context = createContext({
    ...initialState,
    ...(actions as unknown as Record<string, React.Dispatch<any>>),
  });

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actionsWithDispatch = Object.entries(actions).reduce(
      (acc: Record<string, any>, [actionKey, actionValue]) => {
        acc[actionKey] = (payload: any) => dispatch({ type: actionValue, payload });
        return acc;
      },
      {}
    );
    const value = {
      ...state,
      ...actionsWithDispatch,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useState = () => {
    const ctx = useContext(Context);

    if (ctx === undefined) {
      throw new Error('useState is outside its corresponding Provider.');
    }

    return ctx;
  };

  return { Provider, Context, useState };
};

export default createProvider;
