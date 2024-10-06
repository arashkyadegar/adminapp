import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface faqGroupsInitialState {
     faqGroups: [];
}
export const initialState: faqGroupsInitialState = {
     faqGroups: [],
};

// Part 2
export const faqGroupsSlice = createSlice({
     name: "faqGroups",
     initialState: {
          list: [],
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          faqGroupsFetched: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
               state.isLoading = false;
          },
          faqGroupsToggled: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
          },
          faqGroupsFaild: (state: any, action: PayloadAction<any>) => {
               // state.list = [];
               // state.lastFetch = Date.now();
          },
          faqGroupsRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          faqGroupsLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
     },
});

export const { faqGroupsFetched, faqGroupsToggled, faqGroupsFaild } = faqGroupsSlice.actions;
export default faqGroupsSlice.reducer;