import React from "react";
import { Divider, Box } from "@mui/material";
import { SearchInput, CheckboxGroup } from "components";

const SearchOptions = () => {
  return (
    <>
      <Divider />
      <Box
        sx={{
          padding: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
        <SearchInput />
        <CheckboxGroup />
      </Box>
    </>
  );
};

export default SearchOptions;
