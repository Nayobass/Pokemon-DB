import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 30;
  const navigate = useNavigate();

  async function getPokemons() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302");
    setPokemons(response.data.results);
    console.log(data);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const displayPokemon = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pokemons.slice(startIndex, endIndex);
  };

  const changePage = (direction) => {
    setCurrentPage((prevPage) => prevPage + direction);
  };

  const disablePrevButton = currentPage === 0;
  const disableNextButton = currentPage >= Math.ceil(pokemons.length / itemsPerPage) - 1;


  return (
    <>
      <Nav />
      <section id="pokedex">
        <div className="container">
          <div className="row">
            <h1 className="search__maintitle">
              Click on your favorite Pokémon for more info!
            </h1>
            <div className="pokedex__container">
              {displayPokemon().map((pokemon, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/pokemon/${pokemon.name}`);
                  }}
                  className="pokedexcard"
                >
                  <h1 className="pokedexcard__pokemon">
                    {pokemon.name.toUpperCase()}
                  </h1>
                </div>
              ))}
            </div>
            <div className="pokedex__buttons">
              <button
                onClick={() => changePage(-1)}
                disabled={disablePrevButton}
                className="pokedex__buttons--button"
              >
                Previous
              </button>
              <button
                onClick={() => changePage(1)}
                disabled={disableNextButton}
                className="pokedex__buttons--button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokedex;
