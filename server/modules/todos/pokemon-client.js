const axios = require("axios");

const {
  PokemonNotFoundError,
  FailedToFetchPokemonsError,
} = require("./helpers/errors/pokemon-errors");
const { STATUS_CODES } = require("../../helpers/constants");
const POKEMON_ENDPOINT = "pokemon";

const pokemonClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

async function getPokemonById(pokemonId) {
  try {
    const { data } = await pokemonClient.get(
      `${POKEMON_ENDPOINT}/${pokemonId}`
    );
    return data;
  } catch (error) {
    if (error.response?.status === STATUS_CODES.ERROR.CLIENT.NOT_FOUND)
      throw new PokemonNotFoundError(pokemonId);
    throw error;
  }
}

async function getMultiplePokemonsById(pokemonsIds) {
  try {
    const requests = pokemonsIds.map((id) => getPokemonById(id));
    return await Promise.all(requests);
  } catch (error) {
    if (error instanceof PokemonNotFoundError)
      throw new FailedToFetchPokemonsError(pokemonsIds);
    throw error;
  }
}

module.exports = {
  getPokemonById,
  getMultiplePokemonsById,
};
