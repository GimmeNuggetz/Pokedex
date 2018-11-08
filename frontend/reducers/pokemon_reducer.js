import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer =  (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKE:
      return Object.assign({}, state, { [action.pokemon.id]: action.pokemon });
      // return merge({}, state, { poke: action.poke });
    default:
      return state;
  }
};

export default pokemonReducer;


// Object.assign({}, {1: {}, 2: {thing: "not"}}, {2:{thing: "thing"}})
