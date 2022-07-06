const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class TodoModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return [
      "id",
      "value",
      "isCompleted",
      "completedAt",
      "isDeleted",
      "deletedAt",
    ];
  }
}

module.exports = { TodoModelToDtoMapper };
