import { createSlice } from "@reduxjs/toolkit";
import mockData from "helper/mockData.json";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    all: mockData,
  },
  reducers: {
    setFavorite: (state, action) => {
      const { id } = action.payload;
      const member = state.all.find((member) => member.id === id);
      member.isFavorite = !member.isFavorite;
      return state;
    },
  },
});

export const { setFavorite } = memberSlice.actions;
export default memberSlice.reducer;
