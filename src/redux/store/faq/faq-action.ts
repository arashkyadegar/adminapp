import { apiCallBegan } from "../api";

export const submitAddFaqAction = (faq: any) =>
  apiCallBegan({
    url: "/faqs/",
    onSuccess: "faqForm/faqFormCleared",
    onError: "faqForm/faqFormLoadingStoped",
    onStart: "faqForm/faqFormRequested",
    // credentials: "include"
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(faq),
  });

export const getFaqAction = (id: any) =>
  apiCallBegan({
    url: "/faqs/" + id,
    onSuccess: "faqForm/faqFormFetched",
    onError: "faqForm/faqFormFaild",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getfaqsAction = (page: number = 1) =>
  apiCallBegan({
    url: `/faqs?page=${page}`,
    onSuccess: "faqs/faqsFetched",
    onError: "faqs/faqsLoadingStoped",
    onStart: "faqs/faqsRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const searchfaqsAction = (name: string) =>
  apiCallBegan({
    url: `/faqs/search?name=${name}`,
    onSuccess: "faqs/faqsFetched",
    onError: "faqs/faqsLoadingStoped",
    onStart: "faqs/faqsRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const submitDeleteFaqAction = (id: any) =>
  apiCallBegan({
    url: "/faqs/" + id,
    onSuccess: "faqs/faqsLoadingStoped",
    onError: "faqs/faqsLoadingStoped",
    onStart: "faqs/faqsRequested",
    method: "DELETE",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditFaqAction = (faq: any) =>
  apiCallBegan({
    url: "/faqs/" + faq._id,
    onSuccess: "faqForm/faqFormLoadingStoped",
    onError: "faqForm/faqFormLoadingStoped",
    onStart: "faqForm/faqFormRequested",
    // credentials: "include"
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(faq),
  });


export const getfaqsTreeAction = () =>
  apiCallBegan({
    url: `/faqs/findAllGraph`,
    onSuccess: "faqsTree/faqsTreeFetched",
    onError: "faqsTree/faqsTreeLoadingStoped",
    onStart: "faqsTree/faqsTreesRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });