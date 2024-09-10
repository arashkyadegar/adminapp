import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const addTabSlice = createSlice({
     name: "addTab",
     initialState: {
          data: {
               generalTabToggle: true,
               seoTabToggle: false,
               sellTabToggle: false
          }
     },
     reducers: {
          addTabToggle: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload;
          }
     },
});

// action creator
export const {
     addTabToggle
} = addTabSlice.actions;
export default addTabSlice.reducer;
