import { createSlice } from "@reduxjs/toolkit";

const initialCheckStatus = {
  professor: false,
  employee: false,
  student: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchText: "",
    checkStatus: {
      ...initialCheckStatus,
    },
    job: "",
  },
  reducers: {
    changeSearchText: (state, action) => {
      const { searchText } = action.payload;
      return { ...state, searchText: searchText };
    },
    changeCheckStatus: (state, action) => {
      const { job, checked } = action.payload;
      state.checkStatus = { ...initialCheckStatus };
      state.checkStatus[job] = checked;
      state.job = checked ? job : "";
      return state;
    },
  },
});

export const { changeSearchText, changeCheckStatus } = filterSlice.actions;
export default filterSlice.reducer;
