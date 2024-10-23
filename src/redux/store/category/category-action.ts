import { apiCallBegan } from "../api";

export const submitAddCategoryAction = (category: any) =>
  apiCallBegan({
    url: "/categories/",
    onSuccess: "categoryForm/categoryFormCleared",
    onError: "categoryForm/categoryFormLoadingStoped",
    onStart: "categoryForm/categoryFormRequested",
    // credentials: "include"
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });

export const getCategoryAction = (id: any) =>
  apiCallBegan({
    url: "/categories/" + id,
    onSuccess: "categoryForm/categoryFormFetched",
    onError: "categoryForm/categoryFormFaild",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getCategoriesAction = (page: number = 1) =>
  apiCallBegan({
    url: `/categories?page=${page}`,
    onSuccess: "categories/categoriesFetched",
    onError: "categories/categoriesLoadingStoped",
    onStart: "categories/categoriesRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const searchCategoriesAction = (name: string,page: number = 1) =>
  apiCallBegan({
    url: `/categories/search?name=${name}&page=${page}`,
    onSuccess: "categories/categoriesFetched",
    onError: "categories/categoriesLoadingStoped",
    onStart: "categories/categoriesRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const submitDeleteCategoryAction = (id: any) =>
  apiCallBegan({
    url: "/categories/" + id,
    onSuccess: "categories/categoriesLoadingStoped",
    onError: "categories/categoriesLoadingStoped",
    onStart: "categories/categoriesRequested",
    method: "DELETE",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditCategoryAction = (category: any) =>
  apiCallBegan({
    url: "/categories/" + category._id,
    onSuccess: "categoryForm/categoryFormLoadingStoped",
    onError: "categoryForm/categoryFormLoadingStoped",
    onStart: "categoryForm/categoryFormRequested",
    // credentials: "include"
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });


export const getCategoriesTreeAction = () =>
  apiCallBegan({
    url: `/categories/findAllGraph`,
    onSuccess: "categoriesTree/categoriesTreeFetched",
    onError: "categoriesTree/categoriesTreeLoadingStoped",
    onStart: "categoriesTree/categoriesTreesRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });