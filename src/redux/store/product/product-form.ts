import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import update from 'react-addons-update';
// Part 2
export const productFormSlice = createSlice({
     name: "productForm",
     initialState: {
          data: {
               _id: "",
               name: "",
               subCategories: [],
               categoryId: "",
               brand: "",
               images: [],
               shortDesc: "",
               longdesc: "",
               weakPoints: [],
               strongPoints: [],

               nameErr: "",
               subCategoriesErr: "",
               categoryIdErr: "",
               brandErr: "",
               imagesErr: "",
               shortDescErr: "",
               longdescErr: "",
               weakPointsErr: "",
               strongPointsErr: [],

               pageTitle: "",
               pageLink: "",
               desc: "",
               keywords: [],
               tags: [],

               pageTitleErr: "",
               pageLinkErr: "",
               descErr: "",
               keywordsErr: "",
               tagsErr: "",

               status: 0,
               statusErr: "",
               size: "",
               price: 0,
               purchasePrice: 0,
               weight: "",
               stock: "",
               colors: [],

               sizeErr: "",
               priceErr: "",
               purchasePriceErr: "",
               weightErr: "",
               stockErr: "",
               colorsErr: "",

               formIsValid: false

          },
          isLoading: false,
          lastFetch: null,
     },
     reducers: {
          productFormCleared: (state: any) => {
               state.data = {
                    _id: "",

                    name: "",
                    subCategories: [],
                    categoryId: "",
                    brand: "",
                    images: [],
                    shortDesc: "",
                    longdesc: "",
                    weakPoints: [],
                    strongPoints: [],


                    nameErr: "",
                    subCategoriesErr: "",
                    categoryIdErr: "",
                    brandErr: "",
                    imagesErr: "",
                    shortDescErr: "",
                    longdescErr: "",
                    weakPointsErr: "",
                    strongPointsErr: [],


                    pageTitle: "",
                    pageLink: "",
                    desc: "",
                    keywords: [],
                    tags: [],


                    pageTitleErr: "",
                    pageLinkErr: "",
                    descErr: "",
                    keywordsErr: "",
                    tagsErr: "",

                    status: 0,
                    size: "",
                    price: 0,
                    purchasePrice: 0,
                    weight: "",
                    stock: "",
                    colors: [],

                    statusErr: "",
                    sizeErr: "",
                    priceErr: "",
                    purchasePriceErr: "",
                    weightErr: "",
                    stockErr: "",
                    colorsErr: "",

                    formIsValid: false,
               };
               state.isLoading = false;
               state.lastFetch = null;
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
          },

          productFormImagesAdded: (state: any, action: PayloadAction<any>) => {
               state.data.images = action.payload;
               state.lastFetch = "";
          },
          productFormSubcategoryAdded: (state: any, action: PayloadAction<any>) => {
               state.data.subCategories = action.payload;
               state.lastFetch = "";
          },
          productFormWeakPointsAdded: (state: any, action: PayloadAction<any>) => {
               state.data.weakPoints = action.payload;
               state.lastFetch = "";
          },
          productFormStrongPointsAdded: (state: any, action: PayloadAction<any>) => {
               state.data.strongPoints = action.payload;
               state.lastFetch = "";
          }

     }
});

// action creator
export const {
     productFormStrongPointsAdded,
     productFormWeakPointsAdded,
     productFormRequested,
     productFormLoadingStoped,
     productFormCleared,
     productFormFilled,
     productFormFetched,
     productFormImagesAdded
} = productFormSlice.actions
export default productFormSlice.reducer;
