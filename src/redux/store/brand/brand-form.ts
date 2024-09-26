import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Part 2
export const brandFormSlice = createSlice({
     name: "brandForm",
     initialState: {
          data: {
               _id: "",
               name: "",
               image: "",
               nameErr: "",
               imageErr: "",
               formIsValid: false
          },
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          brandFormCleared: (state: any) => {
               state.data = {
                    _id: "",
                    name: "",
                    image: "",

                    nameErr: "",
                    imageErr: "",
                    formIsValid: false
               };
               state.isLoading = false;
               state.lastFetch = "";
          },
          brandFormRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },

          brandFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
          brandFormFetched: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload[0];
               state.data.formIsValid = true;
               state.lastFetch = Date.now();
          },
          brandFormFilled: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload;
               state.lastFetch = "";
          }

     },
});

// action creator
export const {
     brandFormRequested,
     brandFormLoadingStoped,
     brandFormCleared,
     brandFormFilled,
     brandFormFetched
} = brandFormSlice.actions;
export default brandFormSlice.reducer;
