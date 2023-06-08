import { combineReducers } from "@reduxjs/toolkit";
import toursReducer from "./features/tours/toursSlice.js";
import countriesReducer from "./features/countries/countriesSlice.js";
import favModalReducer from "./features/modal/modalSlice.js";

import { countriesApi } from "./services/countriesApi.js";

export const rootReducer = combineReducers({
  tours: toursReducer,
  countries: countriesReducer,
  favModal: favModalReducer,
  [countriesApi.reducerPath]: countriesApi.reducer,
});
