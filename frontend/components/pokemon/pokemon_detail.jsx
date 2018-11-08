import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonDetail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.requestPoke(id);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.id !== this.props.match.params.id) {
      const { id } = this.props.match.params;
      this.props.requestPoke(id);
    }
  }

  render() {
    // const name = this.props.poke.name || "";
    // let poke = "";
    // if (this.props.poke) {
      // poke = (<PokemonIndexItem poke={ this.props.poke }/>);
    // }
    // const poke = (<PokemonIndexItem poke={ this.props.poke }/>) || "";
    return (
      <h1><PokemonIndexItem poke={ this.props.poke || {} }/></h1>
    );
  }

}

export default PokemonDetail;
