export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const validateMobile = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[6-9]\d{9}$/);
};

export const getTodayDateWithtime = () => {
  var date = new Date();
  var dateStr =
    ("00" + date.getDate()).slice(-2) +
    "/" +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear() +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);
  return dateStr;
};
