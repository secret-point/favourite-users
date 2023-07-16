import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchText } from "store/filterSlice";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  const { searchText } = useSelector((state) => state.filterOption);
  const dispatch = useDispatch();
  const changeTexthandler = (e) => {
    dispatch(changeSearchText({ searchText: e.target.value }));
  };

  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      placeholder="Input name"
      size="small"
      onChange={changeTexthandler}
      value={searchText}
    />
  );
};

export default SearchInput;
