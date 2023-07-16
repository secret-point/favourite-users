import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { JOB_TITLES } from "helper/constants";
import { changeCheckStatus } from "store/filterSlice";

const CheckboxGroup = () => {
  const dispatch = useDispatch();
  const { checkStatus } = useSelector((state) => state.filterOption);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    dispatch(changeCheckStatus({ job: name, checked }));
  };

  return (
    <FormGroup sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      {JOB_TITLES.map((job, index) => (
        <FormControlLabel
          control={
            <Checkbox
              name={job}
              onChange={handleChange}
              checked={checkStatus[job]}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={job}
          key={index}
          sx={{
            textTransform: "capitalize",
          }}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxGroup;
