import { combineReducers } from "redux";

import productFormReducer from "./product/product-form";
import productsReducer from "./product/products";

export default combineReducers({
  productForm: productFormReducer,
  products: productsReducer
});
