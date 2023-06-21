import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  price: "",
  phone: "",
  imagepath: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setImagePath: (state, action) => {
      state.imagepath = action.payload;
    },
  },
});

export const { setTitle, setPrice, setPhone, setImagePath } = formSlice.actions;

export default formSlice.reducer;
