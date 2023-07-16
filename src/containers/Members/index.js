import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { MemberCard } from "components";
import { getFilteredMembers } from "utils/utils";

const Members = () => {
  const { members, pageInfo, filterOption } = useSelector((state) => state);
  const searchedMembers = getFilteredMembers(members.all, filterOption);

  return (
    <Grid
      container
      gap={{ xs: 2 }}
      sx={{ justifyContent: "center", marginY: 4 }}
    >
      {searchedMembers
        .slice(
          (pageInfo.page - 1) * pageInfo.perPage,
          pageInfo.page * pageInfo.perPage
        )
        .map((member) => (
          <Grid item key={member.id}>
            <MemberCard member={member} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Members;
