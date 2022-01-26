import React from 'react';

const Pokedex = ({ pokeDex }) => {
    console.log('props', pokeDex)

    const pokemon = pokeDex.map(pokemon => <li>{pokemon.name}</li>)

    return (
        <div>
            Pokedex is here!
            {pokemon}
        </div>
    );
}

export default Pokedex;
