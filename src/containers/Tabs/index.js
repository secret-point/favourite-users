import React from "react";
import { Box, Tab } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "store/pageSlice";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Tabs = ({ children }) => {
  const { tabNumber } = useSelector((state) => state.pageInfo);
  const dispatch = useDispatch();
  const changeTabHandler = (_, value) => {
    dispatch(changeTab({ tabNumber: value }));
  };

  return (
    <Box
      sx={{
        typography: "body1",
        borderColor: "divider",
        borderStyle: "solid",
        borderRadius: 5,
        borderWidth: 1,
        paddingX: 2,
        paddingTop: 2,
        marginX: 36,
        marginY: 8,
        minWidth: 280,
      }}
    >
      <TabContext value={tabNumber}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={changeTabHandler}>
            <Tab
              label="Members"
              value="1"
              icon={<PeopleAltOutlinedIcon />}
              iconPosition="start"
              sx={{ marginY: -2 }}
            />
            <Tab
              label="Favorites"
              value="2"
              icon={<FavoriteBorderOutlinedIcon />}
              iconPosition="start"
              sx={{ marginY: -2 }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">{children[0]}</TabPanel>
        <TabPanel value="2">{children[1]}</TabPanel>
      </TabContext>
      {children[2]}
      {children[3]}
    </Box>
  );
};

export default Tabs;
