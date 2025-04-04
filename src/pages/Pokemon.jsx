import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import Pikachu from "../assets/Pikachu.png"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSearchClick = async () => {
    if (!userInput) {
      setError('Please enter a Pokémon name');
      setPokemon(null);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${userInput}`
      );
      setPokemon(response.data);
      setLoading(false);
    } catch (err) {
      setError('No Pokémon found with that name');
      setPokemon(null);
      setLoading(false);
    }
  }

  // async function getPokemon() {
  //   const userInput = document.querySelector(".searchbar__input").value;
  //   const { data } = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/${userInput}`
  //   );
  //   setPokemon(data);
  // }

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
                value={userInput}
                onChange={handleSearchChange}
                onKeyUp={(event) => {
                  if (event.key === 'Enter') {
                    handleSearchClick;
                  }
                }}
              />
              <button
                onClick={handleSearchClick}
                className="searchbar__button secondary__font"
              >
                Go!
              </button>
            </div>
            <div className="results">
              {loading && <img className="bouncy__pikachu" src={Pikachu}></img>}
              {error && <div>{error}</div>}
              {pokemon && !loading && !error && (<div className="resultcard">
                <img src={pokemon.sprites.front_default} alt="" />
                <p>{pokemon.name.toUpperCase()}</p>
                <p>{pokemon.order}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
