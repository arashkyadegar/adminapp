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
export const brandsSlice = createSlice({
     name: "brands",
     initialState: {
          list: [],
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          brandsFetched: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
               state.isLoading = false;
          },
          brandsToggled: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
          },
          brandsFaild: (state: any, action: PayloadAction<any>) => {
               // state.list = [];
               // state.lastFetch = Date.now();
          },
          brandsRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          brandsLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
     },
});

export const { brandsFetched, brandsToggled, brandsFaild } = brandsSlice.actions;
export default brandsSlice.reducer;