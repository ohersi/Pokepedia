import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import "./styles.css"

const Pokedex = ({ pokeDex, itemsPerPage }) => {
    // console.log('props', pokeDex)

    // We start with an empty list of pokeDex.
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {

        try {
            // Fetch pokeDex from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading pokeDex from ${itemOffset} to ${endOffset}`);

            const pokeURLs = []

            for (let i = itemOffset + 1; i <= endOffset; i++) {
                pokeURLs.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
            }
            // console.log(pokeURLs)

            currPagePokemon(pokeURLs)
            const length = pokeDex.length ? pokeDex.length : 1118
            setPageCount(Math.ceil(length / itemsPerPage));
        }
        catch (error) {
            console.error(error)
        }
        finally {
            // We need to make a conditional so our currPagePokemon() doesnt get invoked unless we have data to work with
            if (currentPokemon) currPagePokemon();
        }

    }, [itemOffset, itemsPerPage]);

    const currPagePokemon = (pokeURLs) => {
        try {
            // axios.all() makes all concurrent requests, instead of doing indiviudals requests, we can programmatically make multiple requests
            // If one of our Promises fails, the entire request fails
            const pokeArr = []
            axios.all(pokeURLs.map(async (url) => {
                const response = await axios.get(url)
                //   console.log('This is our axios.all response', response.data)
                pokeArr.push(response.data)
                setCurrentPokemon(pokeArr.flat())
                // console.log('This is pokeArr',pokeArr)
            }))
        } catch (error) {
            console.error(error)
        }
    }

    const Pokemon = () => {
        return (
            <>
                <div id='pokemon-container'>
                    {
                        currentPokemon &&
                        currentPokemon.map(pokemon => (
                            <div className="card poke-card" key={pokemon.id}>
                                <img src={pokemon.sprites.front_default} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <p className="card-text"> № {pokemon.id}</p>
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

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % pokeDex.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    console.log("current pokemon", currentPokemon)
    return (
        <div>
            <Pokemon />
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default Pokedex;
