import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPokemon, addPokemon } from '../store/pokemonSlice';

const PokemonForm = ({ pokemon, isEdit, onComplete }) => {
  const [name, setName] = useState(pokemon?.name || '');
  const [breed, setBreed] = useState(pokemon?.breed || '');
  const [description, setDescription] = useState(pokemon?.description || '');
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPokemon = {
      id: pokemon?.id || Date.now(),
      name,
      breed,
      description,
    };
    
    if (isEdit) {
      dispatch(editPokemon(newPokemon));
    } else {
      dispatch(addPokemon(newPokemon));
    }

    // Clear the form fields after submission
    setName('');
    setBreed('');
    setDescription('');
    
    onComplete();
  };

  return (
    <div className="container mt-4">
      <h2 className={`text-center ${isEdit ? 'text-warning' : 'text-success'} mb-4`}>
        {isEdit ? 'Edit Pokémon' : 'Add Pokémon'}
      </h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="pokemonName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="pokemonName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Pokémon Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pokemonBreed" className="form-label">Breed</label>
          <input
            type="text"
            className="form-control"
            id="pokemonBreed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Enter Pokémon Breed"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pokemonDescription" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="pokemonDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Pokémon Description"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isEdit ? 'Edit Pokémon' : 'Add Pokémon'}
        </button>
      </form>
    </div>
  );
};

export default PokemonForm;
