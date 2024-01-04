import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  pairs: any[];
};

const initialState = {
  pairs: []
};

export const betPairsSlice = createSlice({
  name: "betPairs",
  initialState: initialState as initialStateType,
  reducers: {
    setBetPairs: (state, action: PayloadAction<any>) => {
      state.pairs = action.payload;
    },
    addBetPairs: (state, action: PayloadAction<any>) => {
      state.pairs = [...state.pairs, action.payload];
    },
    removeBetPairs: (state, action: PayloadAction<any>) => {
      state.pairs = state.pairs.filter((pair) => pair !== action.payload);
    },
    setBetCount: (state, action: PayloadAction<any>) => {
      state.pairs = action.payload;
    }
  }
});

export const betCountSlice = createSlice({
  name: "betCount",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});
