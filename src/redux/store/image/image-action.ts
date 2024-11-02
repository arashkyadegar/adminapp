import { apiCallBegan } from "../api";

export const submitAddImageAction = (image: any) =>
  apiCallBegan({
    url: "/images/",
    onSuccess: "imageForm/imageFormCleared",
    onError: "imageForm/imageFormLoadingStoped",
    onStart: "imageForm/imageFormRequested",
    // credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });

  export const submitAddImagesAction = (images: any) =>
  apiCallBegan({
    url: "/images/multiple",
    onSuccess: "imageForm/imageFormCleared",
    onError: "imageForm/imageFormLoadingStoped",
    onStart: "imageForm/imageFormRequested",
    // credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(images),
  });


export const getImageAction = (id: string) =>
  apiCallBegan({
    url: "/images/" + id,
    onSuccess: "imageForm/imageFormFetched",
    onError: "imageForm/imageFormLoadingStoped",
    onStart: "imageForm/imageFormRequested",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getImagesAction = (page: number = 1) =>
  apiCallBegan({
    url: `/images?page=${page}`,
    onSuccess: "images/imagesFetched",
    onError: "images/imagesLoadingStoped",
    onStart: "images/imagesRequested",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });


export const searchImagesAction = (name: string,page: number = 1) =>
  apiCallBegan({
    url: `/images/search?name=${name}&page=${page}`,
    onSuccess: "images/imagesFetched",
    onError: "images/imagesLoadingStoped",
    onStart: "images/imagesRequested",
    method: "GET",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const submitDeleteImageAction = (id: string) =>
  apiCallBegan({
    url: "/images/" + id,
    onSuccess: "images/imagesLoadingStoped",
    onError: "images/imagesLoadingStoped",
    onStart: "images/imagesRequested",
    method: "DELETE",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditImageAction = (image: any) =>
  apiCallBegan({
    url: "/images/" + image._id,
    onSuccess: "imageForm/imageFormLoadingStoped",
    onError: "imageForm/imageFormLoadingStoped",
    onStart: "imageForm/imageFormRequested",
    // credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });