import {
  Action,
  ThunkAction,
  configureStore,
} from "@reduxjs/toolkit";
import reducer from "../store/reducer";

import reduxLogger from "./middleware/reduxLogger";
import api from "./middleware/api";

export const makeStore = () =>
  configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reduxLogger, api),
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


