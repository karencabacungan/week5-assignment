import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import pokedex from './pokedex.png';
import './App.css';
import Pokemon from './PokemonList';
import PokemonDetails from './Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='header-content'>
          <img id='pokedex' src={pokedex} alt='Pokedex' />
          <button className='header-button'><Link style={{ color: 'white' }} to="/pokedex"><b>Back to Pokédex</b></Link></button>
        </div>
        <Switch>
          <Route path="/pokedex" exact component={Pokemon} />
          <Route path="/pokemon/:name" component={PokemonDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;