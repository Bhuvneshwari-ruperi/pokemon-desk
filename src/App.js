import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PokemonForm from './component/pokemonFrom';
import PokemonList from './component/pokemonList';

const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (pokemon) => {
    setCurrentPokemon(pokemon);
    setIsEdit(true);
  };

  const handleComplete = () => {
    setCurrentPokemon(null);
    setIsEdit(false);
  };

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h1 className="display-4 font-weight-bold text-primary mb-3">Pokémon Manager</h1>
          <div className="p-3 bg-light rounded shadow-sm">
            <p className="lead text-muted">Manage your Pokémon collection easily!</p>
          </div>
        </div>
        <PokemonForm pokemon={currentPokemon} isEdit={isEdit} onComplete={handleComplete} />
        <PokemonList onEdit={handleEdit} />
      </div>
    </Provider>
  );
};

export default App;
