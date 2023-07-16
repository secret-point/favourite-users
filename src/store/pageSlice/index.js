import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: 1,
    perPage: 10,
    tabNumber: "1",
  },
  reducers: {
    changePage: (state, action) => {
      const { newPage } = action.payload;
      return { ...state, page: newPage };
    },
    changeTab: (state, action) => {
      const { tabNumber } = action.payload;
      state.tabNumber = tabNumber;
      state.page = 1;
      return state;
    },
  },
});

export const { changePage, changeTab } = pageSlice.actions;
export default pageSlice.reducer;
