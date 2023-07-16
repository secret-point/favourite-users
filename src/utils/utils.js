export const getFavoriteMembers = (members) =>
  members.filter((member) => member.isFavorite);

export const getFilteredMembers = (members, filterOption) => {
  const { searchText, job } = filterOption;
  const searchedMembers = !!searchText
    ? members.filter((member) =>
        member.fullName.toLowerCase().includes(searchText.toLowerCase().trim())
      )
    : members;
  const filteredMembers = !!job
    ? searchedMembers.filter((member) => member.jobTitle.toLowerCase() === job)
    : searchedMembers;
  return filteredMembers;
};
