import { configureStore } from "@reduxjs/toolkit";
import managePlacesReducer from "./features/places/managePlacesSlice";

export default configureStore({
  reducer: {
    managePlaces: managePlacesReducer,
  },
});
