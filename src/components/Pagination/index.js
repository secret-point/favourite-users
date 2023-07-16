import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Pagination as MUIPagination } from "@mui/material";
import { changePage } from "store/pageSlice";
import { getFavoriteMembers, getFilteredMembers } from "utils/utils";

const Pagination = () => {
  const { members, pageInfo, filterOption } = useSelector((state) => state);

  const favoriteMembers = getFavoriteMembers(members.all);

  const searchedMembers = getFilteredMembers(members.all, filterOption);

  const searchedFavoriteMembers = getFilteredMembers(
    favoriteMembers,
    filterOption
  );

  const dispatch = useDispatch();

  const handleChangePage = (_, value) => {
    dispatch(changePage({ newPage: value }));
  };

  const getTotalPages = (members, perPage) =>
    members % perPage
      ? Math.floor(members / perPage) + 1
      : Math.floor(members / perPage);

  return (
    <>
      <Divider />
      <MUIPagination
        count={getTotalPages(
          pageInfo.tabNumber === "1"
            ? searchedMembers.length
            : searchedFavoriteMembers.length,
          pageInfo.perPage
        )}
        color="primary"
        onChange={handleChangePage}
        page={pageInfo.page}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginY: 2,
        }}
      />
    </>
  );
};

export default Pagination;
