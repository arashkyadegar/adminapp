import { apiCallBegan } from "../api";

export const submitAddFaqGroupAction = (faq: any) =>
  apiCallBegan({
    url: "/faqgroups/",
    onSuccess: "faqGroupForm/faqGroupFormCleared",
    onError: "faqGroupForm/faqGroupFormLoadingStoped",
    onStart: "faqGroupForm/faqGroupFormRequested",
    // credentials: "include"
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(faq),
  });

export const getFaqGroupAction = (id: any) =>
  apiCallBegan({
    url: "/faqgroups/" + id,
    onSuccess: "faqGroupForm/faqGroupFormFetched",
    onError: "faqGroupForm/faqGroupFormFaild",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getFaqGroupsAction = () =>
  apiCallBegan({
    url: `/faqgroups`,
    onSuccess: "faqGroups/faqGroupsFetched",
    onError: "faqGroups/faqGroupsLoadingStoped",
    onStart: "faqGroups/faqGroupsRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const searchfaqgroupsAction = (name: string) =>
  apiCallBegan({
    url: `/faqgroups/search?name=${name}`,
    onSuccess: "faqGroups/faqGroupsFetched",
    onError: "faqGroups/faqGroupsLoadingStoped",
    onStart: "faqGroups/faqGroupsRequested",
    method: "GET",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const submitDeleteFaqGroupAction = (id: any) =>
  apiCallBegan({
    url: "/faqgroups/" + id,
    onSuccess: "faqgroups/faqgroupsLoadingStoped",
    onError: "faqgroups/faqgroupsLoadingStoped",
    onStart: "faqgroups/faqgroupsRequested",
    method: "DELETE",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditFaqGroupAction = (faq: any) =>
  apiCallBegan({
    url: "/faqgroups/" + faq._id,
    onSuccess: "faqGroupForm/faqGroupFormLoadingStoped",
    onError: "faqGroupForm/faqGroupFormLoadingStoped",
    onStart: "faqGroupForm/faqGroupFormRequested",
    // credentials: "include"
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(faq),
  });


