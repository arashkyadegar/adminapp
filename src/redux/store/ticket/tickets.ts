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
export const ticketsSlice = createSlice({
     name: "tickets",
     initialState: {
          list: [],
          totalCount: 0,
          page: 1,
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          ticketsFetched: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload.rows;
               state.totalCount = action.payload.totalCount;
               state.page = action.payload.page;
               state.lastFetch = Date.now();
               state.isLoading = false;
          },

          ticketsToggled: (state: any, action: PayloadAction<any>) => {
               state.list = action.payload;
               state.lastFetch = Date.now();
          },
          ticketsFaild: (state: any, action: PayloadAction<any>) => {
               // state.list = [];
               // state.lastFetch = Date.now();
          },
          ticketsRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          ticketsLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
     },
});

export const {  ticketsLoadingStoped, ticketsRequested, ticketsFetched, ticketsToggled, ticketsFaild } = ticketsSlice.actions;
export default ticketsSlice.reducer;