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
export const imagesSlice = createSlice({
     name: "images",
     initialState: {
          list: [],
          totalCount: 0,
          page: 1,
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          imagesFetched: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload.rows;
               state.totalCount = action.payload.totalCount;
               state.page = action.payload.page;
               state.lastFetch = Date.now();
               state.isLoading = false;
          },

          imagesToggled: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
          },
          imagesFaild: (state: any, action: PayloadAction<any>) => {
               // state.list = [];
               // state.lastFetch = Date.now();
          },
          imagesRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          imagesLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
     },
});

export const {  imagesLoadingStoped, imagesRequested, imagesFetched, imagesToggled, imagesFaild } = imagesSlice.actions;
export default imagesSlice.reducer;