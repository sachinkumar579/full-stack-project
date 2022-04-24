import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { count: countSlice.reducer },
});

export const { update } = countSlice.actions;

export default store;
