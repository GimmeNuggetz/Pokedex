
export const ajaxFetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: "GET"
  });
};

export const ajaxFetchPoke = (id) => {
  return $.ajax({
    url: `/api/pokemon/${id}`,
    method: "GET"
  });
};
