const { STATUS_CODES } = require("../../../../helpers/constants");

class PokemonNotFoundError extends Error {
  constructor(pokemonId) {
    super(`Pokemon with ID ${pokemonId} was not found`);
    this.statusCode = STATUS_CODES.ERROR.CLIENT.NOT_FOUND;
  }
}

class FailedToFetchPokemonsError extends Error {
  constructor(pokemonsIds) {
    super(
      `Failed to fetch pokemons with this input: ${pokemonsIds.join(", ")}`
    );
    this.statusCode = STATUS_CODES.ERROR.CLIENT.NOT_FOUND;
  }
}

module.exports = {
  PokemonNotFoundError,
  FailedToFetchPokemonsError,
};
