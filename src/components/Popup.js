import React from "react";

const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt={selected.Title} />
          <div className="plotDetails">
            <h4>Plot:</h4>
            <p>{selected.Plot}</p>
            <h4>Genre:</h4>
            <p>{selected.Genre}</p>
            <h4>Language:</h4>
            <p>{selected.Language}</p>
          </div>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
