
export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: "GET"
  });
};

export const fetchPoke = (poke) => {
  return $.ajax({
    url: `/api/pokemon/${poke.id}`,
    method: "GET"
  });
};
