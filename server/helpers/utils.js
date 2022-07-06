function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function trimLowerCase(str) {
  return str.trim().toLowerCase();
}

function generateNowTimestamp() {
  return new Date().valueOf();
}

module.exports = {
  capitalize,
  trimLowerCase,
  generateNowTimestamp,
};
