import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePokemon } from '../store/pokemonSlice';

const PokemonList = ({ onEdit }) => {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const dispatch = useDispatch();

  // Inline styles for the card
  const cardStyle = {
    backgroundColor: 'transparent', // Remove the background color
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)', // Visible shadow for depth
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ color: '#ff5722', fontWeight: 'bold' }}>
        Pokémon List
      </h2>
      {pokemons.length === 0 ? (
        <p>No Pokémon available</p>
      ) : (
        <div className="row">
          {pokemons.map((pokemon) => (
            <div className="col-md-4 mb-4" key={pokemon.id}>
              <div
                className="card pokemon-card"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'; // Lift card more on hover
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.7)'; // Darker shadow on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'; // Reset position
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.5)'; // Original shadow
                }}
              >
                <div className="card-body">
                  <h3 className="card-title" style={{ color: 'black' }}>{pokemon.name}</h3>
                  <h5 className="card-subtitle mb-2" style={{ color: 'black' }}>Breed: {pokemon.breed}</h5>
                  <p className="card-text" style={{ color: 'black' }}>{pokemon.description}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={() => onEdit(pokemon)}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removePokemon(pokemon.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
