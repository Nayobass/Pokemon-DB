import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

const Pokemon = () => {
  const [results, setResults] = useState([]);

  async function getPokemon() {
    const userInput = document.querySelector(".searchbar__input").value;
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${userInput || ""}`
    );
    const pokemon = Object.values(data);
    setResults(pokemon);
    console.log(pokemon);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Nav />
      <section id="search">
        <div className="container">
          <div className="row">
            <h1 className="search__maintitle">
              Enter your favorite Pokémon here to get all the details!
            </h1>
            <div className="searchbar">
              <input
                className="searchbar__input secondary__font"
                type="text"
                placeholder="Bulbasaur"
              />
              <button
                onClick={() => {
                  getPokemon();
                }}
                className="searchbar__button secondary__font"
              >
                Go!
              </button>
            </div>
            <div className="results">
                <div className="resultcard">
                  <img src={results[16].front_default} alt="" />
                  <p>{results[11]}</p>
                  <p>{results[12]}</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
