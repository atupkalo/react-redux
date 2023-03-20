import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placesData: [],
};

export const managePlacesSlice = createSlice({
  name: "managePlaces",
  initialState,

  reducers: {
    addPlace: (state, action) => {
      state.placesData = [...state.placesData, action.payload];
      state.avtiveItems = state.placesData.length;
    },
    removePlace: (state, action) => {
      const itemId = Number(action.payload);
      state.placesData = state.placesData.filter((el, i) => {
        return i !== itemId;
      });
    },
    markVisited: (state, action) => {
      const itemId = Number(action.payload);

      state.placesData = state.placesData.filter((el, i) => {
        if (i === itemId) {
          el.isVisited ? (el.isVisited = false) : (el.isVisited = true);
        }
        return el;
      });
    },
  },
});

export const { addPlace, removePlace, markVisited } = managePlacesSlice.actions;
export default managePlacesSlice.reducer;
