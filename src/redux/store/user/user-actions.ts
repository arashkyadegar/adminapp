import { apiCallBegan } from "../api";

export const submitAddUserAction = (user: any) =>
  apiCallBegan({
    url: "/users/",
    onSuccess: "userForm/userFormCleared",
    onError: "userForm/userFormLoadingStoped",
    onStart: "userForm/userFormRequested",
    // credentials: "include"
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

export const getUserAction = (id: any) =>
  apiCallBegan({
    url: "/users/" + id,
    onSuccess: "userForm/userFormFetched",
    onError: "userForm/userFormFaild",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getusersAction = (page: number = 1) =>
  apiCallBegan({
    url: `/users?page=${page}`,
    onSuccess: "users/usersFetched",
    onError: "users/usersLoadingStoped",
    onStart: "users/usersRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const searchusersAction = (name: string) =>
  apiCallBegan({
    url: `/users/search?name=${name}`,
    onSuccess: "users/usersFetched",
    onError: "users/usersLoadingStoped",
    onStart: "users/usersRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const submitDeleteUserAction = (id: any) =>
  apiCallBegan({
    url: "/users/" + id,
    onSuccess: "users/usersLoadingStoped",
    onError: "users/usersLoadingStoped",
    onStart: "users/usersRequested",
    method: "DELETE",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditUserAction = (user: any) =>
  apiCallBegan({
    url: "/users/" + user._id,
    onSuccess: "userForm/userFormLoadingStoped",
    onError: "userForm/userFormLoadingStoped",
    onStart: "userForm/userFormRequested",
    // credentials: "include"
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });


export const getusersTreeAction = () =>
  apiCallBegan({
    url: `/users/findAllGraph`,
    onSuccess: "usersTree/usersTreeFetched",
    onError: "usersTree/usersTreeLoadingStoped",
    onStart: "usersTree/usersTreesRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });