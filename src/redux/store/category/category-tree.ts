import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface FaqsInitialState {
  faqs: [];
}
export const initialState: FaqsInitialState = {
  faqs: [],
};

// Part 2
export const categoriesTreeSlice = createSlice({
  name: "categoriesTree",
  initialState: {
    list: [],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    categoriesTreeFetched: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    categoriesTreeToggled: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    categoriesTreeFaild: (state: any, action: PayloadAction<any>) => {
      // state.list = [];
      // state.lastFetch = Date.now();
    },
    categoriesTreeRequested: (state: any, action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    categoriesTreeLoadingStoped: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
  },
});

export const { categoriesTreeFetched, categoriesTreeToggled, categoriesTreeFaild } = categoriesTreeSlice.actions;
export default categoriesTreeSlice.reducer;