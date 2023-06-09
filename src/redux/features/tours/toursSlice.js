import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedTours: JSON.parse(localStorage.getItem("favoriteItems")) || [],
  selectedTour: JSON.parse(localStorage.getItem("selectedTour")) || null,
};

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (
        state.likedTours.find((tour) => tour.tourId === action.payload.tourId)
      )
        return;
      state.likedTours = [...state.likedTours, action.payload];
      localStorage.setItem("favoriteItems", JSON.stringify(state.likedTours));
    },
    removeFromFavorites: (state, action) => {
      const updatedItems = state.likedTours.filter(
        (tour) => tour.tourId !== action.payload
      );
      state.likedTours = [...updatedItems];
      localStorage.setItem("favoriteItems", JSON.stringify(state.likedTours));
    },
    selectTour: (state, action) => {
      state.selectedTour = action.payload;
      localStorage.setItem("selectedTour", JSON.stringify(state.selectedTour));
    },
  },
});

export const { addToFavorites, removeFromFavorites, selectTour } = toursSlice.actions;

export default toursSlice.reducer;
