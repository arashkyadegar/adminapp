import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Part 2
export const imageFormSlice = createSlice({
     name: "imageForm",
     initialState: {
          data: {
               _id: "",
               images: [],
               imagesErr: "",
               formIsValid: false
          },
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          imageFormCleared: (state: any) => {
               state.data = {
                    _id: "",
                    images: [],
                    imagesErr: "",
                    formIsValid: false,
               };
               state.isLoading = false;
               state.lastFetch = null;
          },
          imageFormRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },
          imageFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
          imageFormFetched: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
               state.data = action.payload[0];
               state.data.formIsValid = true;
               state.lastFetch = Date.now();
          },
          imageFormFilled: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload;
               state.lastFetch = "";
          },

          imageFormImagesAdded: (state: any, action: PayloadAction<any>) => {
               state.data.images = action.payload;
               state.lastFetch = "";
          },


     }
});

// action creator
export const {
     imageFormRequested,
     imageFormLoadingStoped,
     imageFormCleared,
     imageFormFilled,
     imageFormFetched,
     imageFormImagesAdded
} = imageFormSlice.actions
export default imageFormSlice.reducer;
