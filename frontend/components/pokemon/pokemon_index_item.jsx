import React from 'react';

const pokemonIndexItem = (props) => {
  return (
    <div className='pokemon-index-display'>
      <img className='thumbnail-icon' src={props.poke.image_url}></img>
      <p>{props.poke.name}</p>
    </div>
  );
};

export default pokemonIndexItem;
