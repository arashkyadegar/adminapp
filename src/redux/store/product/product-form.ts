import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Part 1
export interface PostInitialState {
     product: number;
}
export const initialState: PostInitialState = {
     product: 0,
};

// Part 2
export const productFormSlice = createSlice({
     name: "productForm",
     initialState: {
          data: {
               _id: "",

               //info
               name: "",
               subCategories: [],
               mainCategory: "",
               brand: "",
               images: [],
               shortDesc: "",
               longdesc: "",
               weakPoints: [],
               strongPoints: [],

               //info Err
               nameErr: "",
               subCategoriesErr: "",
               mainCategoryErr: "",
               brandErr: "",
               imageErr: "",
               shortDescErr: "",
               longdescErr: "",
               weakPointsErr: "",
               strongPointsErr: [],

               //seo
               pageTitle: "",
               pageLink: "",
               desc: "",
               keywords: [],
               tags: [],

               //seoErr
               pageTitleErr: "",
               pageLinkErr: "",
               desErrc: "",
               keywordsErr: "",
               tagsErr: "",

               //sell
               size: "",
               price: 0,
               purchasePrice: 0,
               weight: "",
               stockStatus: "",
               color: "",

               //sellErr
               sizeErr: "",
               priceErr: "",
               purchasePriceErr: "",
               weightErr: "",
               stockStatusErr: "",
               colorErr: "",

               formIsValid: false,

          },
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          productFormCleared: (state: any) => {
               state.data = {
                    _id: "",

                    //info
                    name: "",
                    subCategories: [],
                    mainCategory: "",
                    brand: "",
                    images: [],
                    shortDesc: "",
                    longdesc: "",
                    weakPoints: [],
                    strongPoints: [],

                    //info Err
                    nameErr: "",
                    subCategoriesErr: "",
                    mainCategoryErr: "",
                    brandErr: "",
                    imageErr: "",
                    shortDescErr: "",
                    longdescErr: "",
                    weakPointsErr: "",
                    strongPointsErr: [],

                    //seo
                    pageTitle: "",
                    pageLink: "",
                    desc: "",
                    keywords: [],
                    tags: [],

                    //seoErr
                    pageTitleErr: "",
                    pageLinkErr: "",
                    desErrc: "",
                    keywordsErr: "",
                    tagsErr: "",

                    //sell
                    size: "",
                    price: 0,
                    purchasePrice: 0,
                    weight: "",
                    stockStatus: "",
                    color: "",

                    //sellErr
                    sizeErr: "",
                    priceErr: "",
                    purchasePriceErr: "",
                    weightErr: "",
                    stockStatusErr: "",
                    colorErr: "",

                    formIsValid: false,
               },
                    state.isLoading = false,
                    state.lastFetch = "";
          },
          productFormRequested: (state: any, action: PayloadAction<any>) => {
               state.isLoading = true;
          },

          productFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
          },
          productFormFetched: (state: any, action: PayloadAction<any>) => {
               state.isLoading = false;
               state.data = action.payload[0];
               state.data.formIsValid = true;
               state.lastFetch = Date.now();
          },
          productFormFilled: (state: any, action: PayloadAction<any>) => {
               state.data = action.payload;
               state.lastFetch = "";
          }

     },
});

// action creator
export const {
     productFormRequested,
     productFormLoadingStoped,
     productFormCleared,
     productFormFilled,
     productFormFetched
} = productFormSlice.actions;
export default productFormSlice.reducer;
