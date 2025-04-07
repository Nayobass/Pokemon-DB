import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import PikachuLoading from "../assets/PikachuLoading.png";
import SadCubone from "../assets/SadCubone.png";
import { useNavigate } from "react-router";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSearchClick = async () => {
    if (!userInput) {
      setError("Please enter a Pokémon name");
      setPokemon(null);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${userInput}`
      );
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setPokemon(response.data);
    } catch (err) {
      setError("No Pokémon found with that name!");
      setPokemon(null);
      setLoading(false);
    }
  };

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
                  if (event.key === "Enter") {
                    handleSearchClick();
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
              {loading && (
                <img className="loading__pikachu" src={PikachuLoading}></img>
              )}
              {error && (
                <>
                  <img className="error__cubone" src={SadCubone}></img>
                  <div>{error}</div>
                </>
              )}
              {pokemon && !loading && !error && (
                  <div className="resultcard" onClick={() => navigate(`${pokemon.id}`)}>
                    <img
                      className="resultcard__img"
                      src={pokemon.sprites.front_default}
                      alt=""
                    />
                    <p>Name:</p>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <p>Pokédex No. :</p>
                    <h3>{pokemon.id}</h3>
                    <p>Type:</p>
                    <h3>{pokemon.types[0].type.name.toUpperCase()}</h3>
                    {pokemon.types[1] ? (
                      <h3>{pokemon.types[1].type.name.toUpperCase()}</h3>
                    ) : (
                      <></>
                    )}
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
