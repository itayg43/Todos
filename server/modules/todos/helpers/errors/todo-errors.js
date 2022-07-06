const { STATUS_CODES } = require("../../../../helpers/constants");

class TodoNotFoundError extends Error {
  constructor() {
    super(`Todo with given id was not found`);
    this.statusCode = STATUS_CODES.ERROR.CLIENT.NOT_FOUND;
  }
}

class TodoAlreadyExist extends Error {
  constructor() {
    super(`Todo already exist`);
    this.statusCode = STATUS_CODES.ERROR.CLIENT.BAD_REQUEST;
  }
}

class OneOfTheTodosAlreadyExist extends Error {
  constructor() {
    super(`One of the todos already exist`);
    this.statusCode = STATUS_CODES.ERROR.CLIENT.BAD_REQUEST;
  }
}

module.exports = {
  TodoNotFoundError,
  TodoAlreadyExist,
  OneOfTheTodosAlreadyExist,
};
