import { apiCallBegan } from "../api";

export const submitAddProductAction = (product: any) =>
  apiCallBegan({
    url: "/products/",
    onSuccess: "productForm/productFormCleared",
    onError: "productForm/productFormLoadingStoped",
    onStart: "productForm/productFormRequested",
    // credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

export const getProductAction = (id: any) =>
  apiCallBegan({
    url: "/products/" + id,
    onSuccess: "productForm/productFormFetched",
    onError: "productForm/productFormLoadingStoped",
    onStart: "productForm/productFormRequested",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getProductsAction = (page: number = 1) =>
  apiCallBegan({
    url: `/products?page=${page}`,
    onSuccess: "products/productsFetched",
    onError: "products/productsLoadingStoped",
    onStart: "products/productsRequested",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });


export const searchProductsAction = (name: string,page: number = 1) =>
  apiCallBegan({
    url: `/products/search?name=${name}&page=${page}`,
    onSuccess: "products/productsFetched",
    onError: "products/productsLoadingStoped",
    onStart: "products/productsRequested",
    method: "GET",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const submitDeleteProductAction = (id: any) =>
  apiCallBegan({
    url: "/products/" + id,
    onSuccess: "products/productsLoadingStoped",
    onError: "products/productsLoadingStoped",
    onStart: "products/productsRequested",
    method: "DELETE",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditProductAction = (product: any) =>
  apiCallBegan({
    url: "/products/" + product._id,
    onSuccess: "productForm/productFormLoadingStoped",
    onError: "productForm/productFormLoadingStoped",
    onStart: "productForm/productFormRequested",
    // credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });