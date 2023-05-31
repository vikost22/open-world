import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedTours: JSON.parse(localStorage.getItem('favoriteItems'))||[],
};

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (state.likedTours.find(tour=>tour.tourId === action.payload.tourId)) return;
      state.likedTours = [...state.likedTours, action.payload];
      localStorage.setItem('favoriteItems',JSON.stringify(state.likedTours) )
    },
    removeFromFavorites: (state, action) => {
      const updatedItems = state.likedTours.filter(tour=>tour.tourId!==action.payload)
      state.likedTours = [...updatedItems];
      localStorage.setItem('favoriteItems',JSON.stringify(state.likedTours) )
    }
  },
});

export const { addToFavorites, removeFromFavorites} = toursSlice.actions;

export default toursSlice.reducer;
