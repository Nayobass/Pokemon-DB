import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const navigate = useNavigate();

  //   async function getPokemons() {
  //     const { data } = await axios.get(
  //       "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"
  //     );
  //     const results = data.results;
  //     setPokemons(results);
  //   }

  useEffect(() => {
    async function getPokemons() {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
      );
      const results = data.results;
      setPokemons(results);
    }
    getPokemons();
  }, []);

  async function nextPokemons() {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
    );
    const nextPage = await axios.get(`${data.next}`);
    const newPokemon = nextPage.data.results;
    setPokemons(newPokemon)
  }

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
              {pokemons.map((pokemon, index) => (
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
                onClick={() => {
                  page.previous;
                }}
                className="pokedex__buttons--button"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  nextPokemons();
                }}
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
