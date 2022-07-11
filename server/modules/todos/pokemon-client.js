const axios = require("axios");

const {
  PokemonNotFoundError,
  FailedToFetchPokemonsError,
} = require("./helpers/errors/pokemon-errors");
const { STATUS_CODES } = require("../../helpers/constants");

const ON_ERROR = {
  THROW: "throw",
  RETURN: "return",
};

const pokemonClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

async function getPokemonById(pokemonId, onError = ON_ERROR.THROW) {
  try {
    const { data } = await pokemonClient.get(`/${pokemonId}`);
    return data;
  } catch (error) {
    if (onError === ON_ERROR.RETURN) {
      return pokemonId;
    }
    throw error.response?.status === STATUS_CODES.ERROR.CLIENT.NOT_FOUND
      ? new PokemonNotFoundError(pokemonId)
      : error;
  }
}

async function getMultiplePokemonsById(pokemonsIds) {
  const results = await Promise.all(
    pokemonsIds.map((id) => getPokemonById(id, ON_ERROR.RETURN))
  );
  if (results.every((result) => typeof result === "number")) {
    throw new FailedToFetchPokemonsError(pokemonsIds);
  }
  const pokemons = results.filter((result) => typeof result === "object");
  const idsFailed = results.filter((result) => typeof result === "number");
  return { pokemons, idsFailed };
}

module.exports = {
  getPokemonById,
  getMultiplePokemonsById,
};
