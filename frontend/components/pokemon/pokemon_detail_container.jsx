import pokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';
import { selectPoke } from '../../reducers/selectors';
import { requestPoke } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const poke = state.entities.pokemon[ownProps.match.params.id] || {};
  return {
    poke
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPoke: (id) => dispatch(requestPoke(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pokemonDetail);
