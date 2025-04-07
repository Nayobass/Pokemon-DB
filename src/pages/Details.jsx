import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  async function getDetails() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setDetails(data);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Nav />
      <section id="details">
        <div className="container">
          <div className="row">
            {details && (
              <div className="details__container">
                <img className="details__img" src={details.sprites.front_default} alt="" />
                <div className="details__text">
                  <h1>{details.name.toUpperCase()}</h1>
                  <p>Pokédex No.: {details.id}</p>
                  <p>
                    Ability: {details.abilities[0].ability.name.toUpperCase()}
                  </p>
                  <p>
                    Type: {details.types[0].type.name.toUpperCase()}{" "}
                    {details.types[1] ? (
                      <p>{details.types[1].type.name.toUpperCase()}</p>
                    ) : (
                      <></>
                    )}
                  </p>
                  <p>Weight: {details.weight}</p>
                  <p>Height: {details.height}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
