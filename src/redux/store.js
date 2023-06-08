import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { countriesApi } from "./services/countriesApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(countriesApi.middleware);
  },
  devTools: true,
});
