const STATUS_CODES = {
  ERROR: {
    CLIENT: {
      BAD_REQUEST: 400,
      NOT_FOUND: 404,
    },
    SERVER: {
      INTERNAL: 500,
    },
  },
  SUCCESS: {
    OK: 200,
    CREATED: 201,
  },
};

const LOG_TYPES = {
  REQUEST: "request",
  ERROR: "error",
};

module.exports = {
  STATUS_CODES,
  LOG_TYPES,
};
