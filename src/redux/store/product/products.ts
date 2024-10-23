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
export const productsSlice = createSlice({
     name: "products",
     initialState: {
          list: [],
          totalCount: 0,
          page: 1,
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          productsFetched: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload.rows;
               state.totalCount = action.payload.totalCount;
               state.page = action.payload.page;
               state.lastFetch = Date.now();
               state.isLoading = false;
          },

          productsToggled: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
          },
          productsFaild: (state: any, action: PayloadAction<any>) => {
               // state.list = [];
               // state.lastFetch = Date.now();
          },
          productsRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          productsLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
     },
});

export const {  productsLoadingStoped, productsRequested, productsFetched, productsToggled, productsFaild } = productsSlice.actions;
export default productsSlice.reducer;