import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  async function getDetails() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setDetails(data)
  }

  useEffect(() => {
    getDetails();
  }, []);
  
  console.log(details)

  return (
    <>
      <Nav />
      <section id="details">
        <div className="container">
            <div className="row">
                <div className="details__container">
                    <img alt="" />
                    <div className="details__text">
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Details;
