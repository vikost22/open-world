import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedContinent:
    JSON.parse(localStorage.getItem("selectedContinent")) || "asia",
  selectedCountry:
    JSON.parse(localStorage.getItem("selectedCountry")) ||
    null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    selectContinent: (state, action) => {
      state.selectedContinent = action.payload;
      localStorage.setItem(
        "selectedContinent",
        JSON.stringify(state.selectedContinent)
      );
    },
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
      localStorage.setItem(
        "selectedCountry",
        JSON.stringify(state.selectedCountry)
      );
    },
  },
});

export const { selectContinent, selectCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
