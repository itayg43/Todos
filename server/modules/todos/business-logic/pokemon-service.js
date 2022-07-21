const { getPokemonById, getMultiplePokemonsById } = require("../pokemon-client");
const { capitalize, trimLowerCase } = require("../../../helpers/utils");
const todosDataAccess = require("../data-access/todos-data-access");
const { TodoModelToDtoMapper } = require("./dto/todo-model-to-dto-mapper");

const todoModelToDtoMapper = new TodoModelToDtoMapper();

async function submitPokemon(pokemonStrId) {
  const pokemonId = Number.parseInt(pokemonStrId);
  const { name } = await getPokemonById(pokemonId);
  const pokemonData = preparePokemonData(name);
  const todo = await todosDataAccess.submitTodo(pokemonData);
  return {
    todo: todoModelToDtoMapper.convert(todo),
    idsFailed: null,
  };
}

async function submitMultiplePokemons(pokemonsStrIds) {
  const pokemonIds = preparePokemonsIds(pokemonsStrIds);
  const { pokemons, idsFailed } = await getMultiplePokemonsById(pokemonIds);
  const pokemonsData = pokemons.map(({ name }) => preparePokemonData(name));
  const todos = await todosDataAccess.submitMultipleTodos(pokemonsData);
  return {
    todo: todos.map((todo) => todoModelToDtoMapper.convert(todo)),
    idsFailed,
  };
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
  submitPokemon,
  submitMultiplePokemons,
};
