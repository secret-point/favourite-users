import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { MemberCard } from "components";
import { getFavoriteMembers, getFilteredMembers } from "utils/utils";

const Favorites = () => {
  const { members, pageInfo, filterOption } = useSelector((state) => state);

  const favoriteMembers = getFavoriteMembers(members.all);
  const searchedFavoriteMembers = getFilteredMembers(
    favoriteMembers,
    filterOption
  );

  return (
    <Grid
      container
      gap={{ xs: 2 }}
      sx={{ justifyContent: "center", marginY: 4 }}
    >
      {searchedFavoriteMembers
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

export default Favorites;
