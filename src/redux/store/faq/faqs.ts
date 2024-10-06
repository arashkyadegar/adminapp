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
export const faqsSlice = createSlice({
     name: "faqs",
     initialState: {
          list: [],
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          faqsFetched: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
               state.isLoading = false;
          },
          faqsToggled: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
          },
          faqsFaild: (state: any, action: PayloadAction<any>) => {
               // state.list = [];
               // state.lastFetch = Date.now();
          },
          faqsRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          faqsLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
     },
});

export const { faqsFetched, faqsToggled, faqsFaild } = faqsSlice.actions;
export default faqsSlice.reducer;