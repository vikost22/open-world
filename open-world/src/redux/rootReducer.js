import { combineReducers } from '@reduxjs/toolkit';
import toursReducer from './features/tours/toursSlice.js';

export const rootReducer = combineReducers({tours: toursReducer});