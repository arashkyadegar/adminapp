

import reducer from "../store/reducer";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PERSIST,
  REGISTER,
  PAUSE,
  PURGE,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import api from "./middleware/api";


const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, reducer);
export const makeStore = () =>

  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api),
  });





type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const mstore = makeStore();
export const persistor = persistStore(mstore);