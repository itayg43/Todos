const { STATUS_CODES } = require("../helpers/constants");
const { submitErrorLog } = require("../logger");

function errorHandler(err, _, res, _) {
  const status = err.statusCode || STATUS_CODES.ERROR.SERVER.INTERNAL;
  const message = err.message || "Something went wrong";
  const stack = err.stack;
  submitErrorLog(status, message, stack);
  res.status(status).json({ message });
}

module.exports = errorHandler;
