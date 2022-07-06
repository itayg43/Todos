const { submitRequestLog } = require("../logger");

function requestLogger(req, _, next) {
  submitRequestLog(`${req.method} ${req.path}`);
  next();
}

module.exports = requestLogger;
