import React, { Component }from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Link } from 'react-router-dom';

class PokemonIndex extends Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon.map((el) => {
      return (
        <li key={el.id}>
          <Link to={`/pokemon/${el.id}`}>
            <PokemonIndexItem poke={el}/>
          </Link>
        </li>
      );
    });
    return (
      <ul>
        { pokemon }
      </ul>
    );
  }
}

export default PokemonIndex;
