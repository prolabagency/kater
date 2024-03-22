import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import  bestler  from './brestler/reducer'


const makeStore = () =>
  configureStore({
    reducer: {
      bestler,
    },
    devTools: true,
  });


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;


export const wrapper = createWrapper<AppStore>(makeStore);