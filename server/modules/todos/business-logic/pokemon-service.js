const { getPokemonById, getMultiplePokemonsById } = require("../pokemon-client");
const { capitalize, trimLowerCase } = require("../../../helpers/utils");
const todosDataAccess = require("../data-access/todos-data-access");

async function onAddPokemon(pokemonStrId) {
  const pokemonId = Number.parseInt(pokemonStrId);
  const { name } = await getPokemonById(pokemonId);
  const pokemonData = preparePokemonData(name);
  return await todosDataAccess.submitTodo(pokemonData);
}

async function onAddMultiplePokemons(pokemonsStrIds) {
  const pokemonIds = preparePokemonsIds(pokemonsStrIds);
  const pokemons = await getMultiplePokemonsById(pokemonIds);
  const pokemonsData = pokemons.map(({ name }) => preparePokemonData(name));
  return await todosDataAccess.submitMultipleTodos(pokemonsData);
}

function preparePokemonsIds(pokemonsStrIds) {
  let strIds = pokemonsStrIds;
  if (strIds.endsWith(",")) {
    strIds = strIds.slice(0, -1);
  }
  strIds = strIds.split(",").map((strId) => strId.trim());
  return [...new Set(strIds)].map((strId) => Number.parseInt(strId));
}

function preparePokemonData(name) {
  return { value: `Catch ${preparePokemonName(name)}` };
}

function preparePokemonName(name) {
  return capitalize(trimLowerCase(name));
}

module.exports = {
  onAddPokemon,
  onAddMultiplePokemons,
};
