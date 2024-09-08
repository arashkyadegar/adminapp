import { combineReducers } from "redux";

import productFormReducer from "./product/product-form";
import productsReducer from "./product/products";
import categoryFormReducer from "./category/category-form";
import categoriesReducer from "./category/categories";

export default combineReducers({
  categoryForm: categoryFormReducer,
  categories: categoriesReducer,
  productForm: productFormReducer,
  products: productsReducer
});
