import { apiCallBegan } from "../api";

export const submitAddBrandAction = (brand: any) =>
  apiCallBegan({
    url: "/brands/",
    onSuccess: "brandForm/brandFormCleared",
    onError: "brandForm/brandFormLoadingStoped",
    onStart: "brandForm/brandFormRequested",
    // credentials: "include"
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(brand),
  });

export const getBrandAction = (id: any) =>
  apiCallBegan({
    url: "/brands/" + id,
    onSuccess: "brandForm/brandFormFetched",
    onError: "brandForm/brandFormFaild",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getBrandsAction = () =>
  apiCallBegan({
    url: `/brands`,
    onSuccess: "brands/brandsFetched",
    onError: "brands/brandsLoadingStoped",
    onStart: "brands/brandsRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const searchBrandsAction = (name: string) =>
  apiCallBegan({
    url: `/brands/search?name=${name}`,
    onSuccess: "brands/brandsFetched",
    onError: "brands/brandsLoadingStoped",
    onStart: "brands/brandsRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const submitDeleteBrandAction = (id: any) =>
  apiCallBegan({
    url: "/brands/" + id,
    onSuccess: "brands/brandsLoadingStoped",
    onError: "brands/brandsLoadingStoped",
    onStart: "brands/brandsRequested",
    method: "DELETE",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditBrandAction = (brand: any) =>
  apiCallBegan({
    url: "/brands/" + brand._id,
    onSuccess: "brandForm/brandFormLoadingStoped",
    onError: "brandForm/brandFormLoadingStoped",
    onStart: "brandForm/brandFormRequested",
    // credentials: "include"
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(brand),
  });
