import { createSlice } from "@reduxjs/toolkit";
const initialSelectedCountry = {
  countryId: 1,
  name: "Vietnam",
  countryDescription:
    "Vietnam is a captivating Southeast Asian destination known for its rich history, vibrant culture, stunning landscapes, and delicious cuisine, making it a must-visit for any traveler.",
  backgroundImage: "./images/countries/vietnam/background.png",
  backgroundImagePage: "../../images/countries/vietnam/background-page.png",
  bestTours: [
    {
      tourName: "Chin Gip,Vietnam",
      reviews: 5,
      image: "./images/countries/vietnam/chin-gip.png",
      tourId: 1,
    },
    {
      tourName: "Duck Lak,Vietnam",
      reviews: 5,
      image: "./images/countries/vietnam/duck-lak.png",
      tourId: 2,
    },
    {
      tourName: "Chanhoi,Vietnam",
      reviews: 4,
      image: "./images/countries/vietnam/chanhoi.png",
      tourId: 3,
    },
    {
      tourName: "Hoshimi,Vietnam",
      reviews: 5,
      image: "./images/countries/vietnam/hoshimi.png",
      tourId: 4,
    },
    {
      tourName: "Da Nang,Vietnam",
      reviews: 4,
      image: "./images/countries/vietnam/da-nang.png",
      tourId: 5,
    },
  ],
};
const initialState = {
  selectedContinent:
    JSON.parse(localStorage.getItem("selectedContinent")) || "asia",
  selectedCountry:
    JSON.parse(localStorage.getItem("selectedCountry")) ||
    initialSelectedCountry,
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
