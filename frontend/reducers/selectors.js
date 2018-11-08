export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectPoke = (state, ownProps) => {
  const pokeId = ownProps.match.params.id;
  return Object.values(state.entities.pokemon[pokeId]);
};
