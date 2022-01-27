import React from 'react';

const Favorites = ({ favorite, removeFromFavorite }) => {
    return (
        <>
                <div id='pokemon-container'>
                    {
                        favorite &&
                        favorite.map(pokemon => (
                            <div className="card poke-card" key={pokemon.id}>
                                {/* <img src={pokemon.sprites.front_default ?
                                    pokemon.sprites.front_default :
                                    pokemon.sprites.other['official-artwork'].front_default
                                } className="card-img-top" alt="..." /> */}
                                <img src={pokemon.sprites.other['official-artwork'].front_default ?
                                    pokemon.sprites.other['official-artwork'].front_default :
                                    pokemon.sprites.front_default
                                } className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <p className="card-text"> № {pokemon.id}</p>
                                    <button className='btn btn-danger' onClick={() => removeFromFavorite(pokemon)}>Remove</button>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </>
    );
}

export default Favorites;
