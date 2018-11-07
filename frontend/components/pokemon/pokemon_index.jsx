import React from 'react';

const PokemonIndex = (props) => {
  const pokeNames = props.pokemon.map((el) => {
    return (
      <li key={el.id}>{el.name}
        <img src={el.image_url}></img>

      </li>
    )
  });

  return (
    <ul>
      { pokeNames }
    </ul>
  );
};

export default PokemonIndex;
