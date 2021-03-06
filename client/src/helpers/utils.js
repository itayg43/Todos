export const convertTimestampToDate = (timestamp) => {
  const dateTime = new Date(timestamp);
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  return `${day}/${month}/${year}`;
};

export const trimStringAndLowerCaseAll = (string) => {
  return string.trim().toLowerCase();
};
