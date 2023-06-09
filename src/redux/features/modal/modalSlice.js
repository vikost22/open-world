import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: false,
};

export const favModalSlice = createSlice({
  name: "favModal",
  initialState,
  reducers: {
    toggleModalState: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
});

export const { toggleModalState } = favModalSlice.actions;

export default favModalSlice.reducer;
