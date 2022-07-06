const { Log } = require("./storage/database/models");
const { LOG_TYPES } = require("./helpers/constants");

async function submitRequestLog(message) {
  await submitLog({
    type: LOG_TYPES.REQUEST,
    message,
  });
}

async function submitErrorLog(status, message, stack) {
  await submitLog({
    type: LOG_TYPES.ERROR,
    status,
    message,
    stack,
  });
}

async function submitLog(log) {
  await Log.create(log);
}

module.exports = {
  submitRequestLog,
  submitErrorLog,
};
