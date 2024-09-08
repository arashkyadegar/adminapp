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
export const categoriesSlice = createSlice({
     name: "categories",
     initialState: {
          list: [],
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          categoriesFetched: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
               state.isLoading = false;
          },
          categoriesToggled: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
          },
          categoriesFaild: (state: any, action: PayloadAction<any>) => {
               // state.list = [];
               // state.lastFetch = Date.now();
          },
          categoriesRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          categoriesLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
     },
});

export const { categoriesFetched, categoriesToggled, categoriesFaild } = categoriesSlice.actions;
export default categoriesSlice.reducer;