import { combineReducers } from "redux";

import productFormReducer from "./product/product-form";
import productsReducer from "./product/products";
import categoryFormReducer from "./category/category-form";
import settingFormReducer from "./setting/setting-form";
import categoriesReducer from "./category/categories";
import categoriesTreeReducer from "./category/category-tree";
import addTabReducer from "./productTab/productAddTab";
export default combineReducers({
  categoriesTree: categoriesTreeReducer,
  settingForm: settingFormReducer,
  categoryForm: categoryFormReducer,
  categories: categoriesReducer,
  productForm: productFormReducer,
  products: productsReducer,
  addTab: addTabReducer
});
