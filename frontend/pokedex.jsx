import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import { requestAllPokemon } from './actions/pokemon_actions';
import Root from './components/root';
import {HashRouter, Route} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
  window.store = store;
});
