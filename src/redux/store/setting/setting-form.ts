import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Part 2
export const settingFormSlice = createSlice({
  name: "settingForm",
  initialState: {
    data: {
      _id: "",
      slideImages: [],
      formIsValid: false
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    settingFormCleared: (state: any) => {
      state.data = {
        _id: "",
        slideImages: [],
        formIsValid: false,
      };
      state.isLoading = false;
      state.lastFetch = null;
    },
    settingFormRequested: (state: any, action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    settingFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
    settingFormFetched: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.data = action.payload[0];
      state.data.formIsValid = true;
      state.lastFetch = Date.now();
    },
    settingFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = "";
    },
    settingFormSlideImagesAdded: (state: any, action: PayloadAction<any>) => {
      state.data.slideImages = action.payload;
      state.lastFetch = "";
 },
  }
});

// action creator
export const {
  settingFormCleared,
  settingFormRequested,
  settingFormLoadingStoped,
  settingFormFetched,
  settingFormFilled,
  settingFormSlideImagesAdded
} = settingFormSlice.actions
export default settingFormSlice.reducer;
