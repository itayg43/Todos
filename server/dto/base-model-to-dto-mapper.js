const _ = require("lodash");

class BaseModelToDtoMapper {
  dtoKeys() {
    return ["id"];
  }
  convert(model) {
    return _.pick(model, this.dtoKeys());
  }
}

module.exports = { BaseModelToDtoMapper };
