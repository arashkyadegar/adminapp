import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Part 2
export const categoryFormSlice = createSlice({
     name: "categoryForm",
     initialState: {
          data: {
               _id: "",
               name: "",
               pageTitle: "",
               menuTitle: "",
               parentCategoryId: "",
               desc: "",
               keywords: [],
               upDesc: "",
               downDesc: "",
               icon: "",
               image: "",
               nameErr: "",
               pageTitleErr: "",
               menuTitleErr: "",
               parentCategoryIdErr: "",
               descErr: "",
               keywordsErr: [],
               upDescErr: "",
               downDescErr: "",
               iconErr: "",
               imageErr: "",
               formIsValid: false
          },
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          categoryFormCleared: (state: any) => {
               state.data = {
                    _id: "",
                    name: "",
                    pageTitle: "",
                    menuTitle: "",
                    parentCategoryId: "",
                    desc: "",
                    keywords: [],
                    upDesc: "",
                    downDesc: "",
                    icon: "",
                    image: "",

                    nameErr: "",
                    pageTitleErr: "",
                    menuTitleErr: "",
                    parentCategoryIdErr: "",
                    descErr: "",
                    keywordsErr: [],
                    upDescErr: "",
                    downDescErr: "",
                    iconErr: "",
                    imageErr: "",
                    formIsValid: false,
               };
                    state.isLoading = false;
               state.lastFetch = "";
          },
          categoryFormRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },

          categoryFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
          categoryFormFetched: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload[0];
               state.data.formIsValid = true;
               state.lastFetch = Date.now();
          },
          categoryFormFilled: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload;
               state.lastFetch = "";
          }

     },
});

// action creator
export const {
     categoryFormRequested,
     categoryFormLoadingStoped,
     categoryFormCleared,
     categoryFormFilled,
     categoryFormFetched
} = categoryFormSlice.actions;
export default categoryFormSlice.reducer;
