import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receivePoke = ({ pokemon, items }) => {
  return {
    type: RECEIVE_POKE,
    pokemon,
    items
  };
};

export const requestPoke = id => dispatch => {
  return APIUtil.ajaxFetchPoke(id).then((poke) => {
    return dispatch(receivePoke(poke));
  });
};

export const requestAllPokemon = () => (dispatch) => {
  APIUtil.ajaxFetchAllPokemon().then( (pokemon) => {
    return dispatch(receiveAllPokemon(pokemon));
  });
};
