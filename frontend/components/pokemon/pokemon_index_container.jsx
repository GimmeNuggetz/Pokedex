import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import pokemonIndex from './pokemon_index';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  // const pokemon = selectAllPokemon(state)
  return {
    pokemon: selectAllPokemon(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPokemon: () => dispatch(requestAllPokemon())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pokemonIndex);
