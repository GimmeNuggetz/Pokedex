import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import pokemonIndex from './pokemon_index';
import { connect } from 'react-redux';

const mapStateToProps = monkeys => {
  // const pokemon = selectAllPokemon(state)
  return {
    pokemon: selectAllPokemon(monkeys)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPokemon: dispatch(requestAllPokemon)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pokemonIndex);
