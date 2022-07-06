const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitTodoSchema = {
  value: {
    exists: {
      errorMessage: "Value required",
    },
    isString: {
      errorMessage: "Value needs to be string",
    },
    isLength: {
      errorMessage: "Value should be min 1 char long",
      options: {
        min: 1,
      },
    },
    in: ["body"],
  },
};

const toggleTodoIsCompletedSchema = {
  isCompleted: {
    exists: {
      errorMessage: "Is completed status required",
    },
    isBoolean: {
      errorMessage: "Is completed needs to be boolean",
    },
    in: ["body"],
  },
};

const toggleTodoIsDeletedSchema = {
  isDeleted: {
    exists: {
      errorMessage: "Is deleted status required",
    },
    isBoolean: {
      errorMessage: "Is deleted needs to be boolean",
    },
    in: ["body"],
  },
};

function validateSubmitTodoSchema() {
  return validateSchema(submitTodoSchema);
}

function validateToggleTodoIsCompletedSchema() {
  return validateSchema(toggleTodoIsCompletedSchema);
}

function validateToggleTodoIsDeletedSchema() {
  return validateSchema(toggleTodoIsDeletedSchema);
}

module.exports = {
  validateSubmitTodoSchema,
  validateToggleTodoIsCompletedSchema,
  validateToggleTodoIsDeletedSchema,
};
