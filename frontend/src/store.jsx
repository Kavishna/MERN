import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/form/formSlice";
import adsReducer from "./features/ads/adsSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    ads: adsReducer,
  },
});
