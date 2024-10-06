import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Part 2
export const faqFormSlice = createSlice({
     name: "faqForm",
     initialState: {
          data: {
               _id: "",
               groupId: 0,
               question: "",
               answer: "",
               display: "1",
               priority: 0,

               questionErr: "",
               answerErr: "",
               displayErr: "",
               priorityErr: "",

               formIsValid: false
          },
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          faqFormCleared: (state: any) => {
               state.data = {
                    _id: "",
                    groupId: 0,
                    question: "",
                    answer: "",
                    display: "1",
                    priority: 0,

                    questionErr: "",
                    answerErr: "",
                    displayErr: "",
                    priorityErr: "",

                    formIsValid: false
               };
               state.isLoading = false;
               state.lastFetch = "";
          },
          faqFormRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },

          faqFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
          faqFormFetched: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload[0];
               state.data.formIsValid = true;
               state.lastFetch = Date.now();
          },
          faqFormFilled: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload;
               state.lastFetch = "";
          }

     },
});

// action creator
export const {
     faqFormRequested,
     faqFormLoadingStoped,
     faqFormCleared,
     faqFormFilled,
     faqFormFetched
} = faqFormSlice.actions;
export default faqFormSlice.reducer;
