"use client";

import { configureStore } from "@reduxjs/toolkit";
import { betCountSlice, betPairsSlice } from "./features/bet-pairs";

export const store = configureStore({
  reducer: {
    betPairs: betPairsSlice.reducer,
    betCount: betCountSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
