import React from "react";
import Nav from "../components/Nav";

const Characters = () => {
  return (
    <>
      <Nav />
      <section id="search">
        <div className="container">
          <div className="row">
            <h1 className="search__maintitle">
              Enter a quote from your favorite{" "}
              <span className="secondary__font">Lord of the Rings</span>{" "}
              character here!
            </h1>
            <div className="searchbar">
              <input
                className="searchbar__input secondary__font"
                type="text"
                placeholder="What about second breakfast?"
              />
              <button className="searchbar__button secondary__font">Go!</button>
            </div>
            <div className="results">
              <div className="resultcard">
                <h1 className="resultcard__main secondary__font">Quote: </h1>
                <p>Character: </p>
                <p>Movie: </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Characters;
