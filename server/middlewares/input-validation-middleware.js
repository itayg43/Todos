const { validationResult, checkSchema } = require("express-validator");
const { STATUS_CODES } = require("../helpers/constants");

function validateSchema(schema) {
  const validationMiddleware = checkSchema(schema);
  return async (req, _, next) => {
    await validationMiddleware.run(req);
    const result = validationResult(req);
    if (result.isEmpty()) {
      next();
      return;
    }
    const error = Error(
      result
        .array()
        .map((value) => value.msg)
        .join()
    );
    error.statusCode = STATUS_CODES.ERROR.CLIENT.BAD_REQUEST;
    next(error);
  };
}

module.exports = {
  validateSchema,
};
