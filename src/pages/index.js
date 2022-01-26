import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

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
            setPageCount(Math.ceil(pokeDex.length / itemsPerPage));
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
              
          } catch (error) {
              console.error(error)
          }
    }

    const Pokemon = () => {
        return (
            <>
                {
                    pokeDex &&
                    pokeDex.map(pokemon => (
                        <div>
                            {/* <h3>{pokemon.name}</h3> */}
                        </div>
                    )
                    )
                }
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

    // console.log("current pokemon", currentPokemon)
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
