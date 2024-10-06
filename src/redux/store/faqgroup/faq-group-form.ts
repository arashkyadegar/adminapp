import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Part 2
export const faqGroupFormSlice = createSlice({
     name: "faqGroupForm",
     initialState: {
          data: {
               _id: "",
               name: "",
               display: "1",
               priority: 0,

               nameErr: "",
               displayErr: "",
               priorityErr: "",

               formIsValid: false
          },
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          faqGroupFormCleared: (state: any) => {
               state.data = {
                    _id: "",
                    name: "",
                    display: "0",
                    priority: 0,

                    nameErr: "",
                    displayErr: "",
                    priorityErr: "",



                    formIsValid: false
               };
               state.isLoading = false;
               state.lastFetch = "";
          },
          faqGroupFormRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },

          faqGroupFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
          faqGroupFormFetched: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload[0];
               state.data.formIsValid = true;
               state.lastFetch = Date.now();
          },
          faqGroupFormFilled: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload;
               state.lastFetch = "";
          }

     },
});

// action creator
export const {
     faqGroupFormRequested,
     faqGroupFormLoadingStoped,
     faqGroupFormCleared,
     faqGroupFormFilled,
     faqGroupFormFetched
} = faqGroupFormSlice.actions;
export default faqGroupFormSlice.reducer;
