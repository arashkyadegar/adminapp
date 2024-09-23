import { apiCallBegan } from "../api";

export const submitEditSettingAction = (setting: any) =>
  apiCallBegan({
    url: "/settings/1",
    onSuccess: "settingForm/settingFormLoadingStoped",
    onError: "settingForm/settingFormLoadingStoped",
    onStart: "settingForm/settingFormRequested",
    // credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(setting),
});


export const getSettingAction = (id: any) =>
  apiCallBegan({
    url: "/settings/" + id,
    onSuccess: "settingForm/settingFormLoadingStoped",
    onError: "settingForm/settingFormLoadingStoped",
    onStart: "settingForm/productFormRequested",
    method: "GET",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
