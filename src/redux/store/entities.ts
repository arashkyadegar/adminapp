import { combineReducers } from "redux";
import brandFormReducer from "./brand/brand-form";
import brandsReducer from "./brand/brands";
import imageFormReducer from "./image/image-form";
import imagesReducer from "./image/images";
import faqGroupFormReducer from "./faqgroup/faq-group-form";
import faqGroupsReducer from "./faqgroup/faq-groups";
import faqFormReducer from "./faq/faq-form";
import faqsReducer from "./faq/faqs";
import productFormReducer from "./product/product-form";
import productsReducer from "./product/products";
import categoryFormReducer from "./category/category-form";
import settingFormReducer from "./setting/setting-form";
import categoriesReducer from "./category/categories";
import categoriesTreeReducer from "./category/category-tree";
import addTabReducer from "./productTab/productAddTab";
import ticketsReducer from "./ticket/tickets";
export default combineReducers({
  tickets: ticketsReducer,
  imageForm: imageFormReducer,
  images: imagesReducer,
  faqGroupForm: faqGroupFormReducer,
  faqGroups: faqGroupsReducer,
  faqForm: faqFormReducer,
  faqs: faqsReducer,
  brands: brandsReducer,
  brandForm: brandFormReducer,
  categoriesTree: categoriesTreeReducer,
  settingForm: settingFormReducer,
  categoryForm: categoryFormReducer,
  categories: categoriesReducer,
  productForm: productFormReducer,
  products: productsReducer,
  addTab: addTabReducer
});
