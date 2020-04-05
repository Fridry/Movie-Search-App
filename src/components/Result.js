import React from "react";

const Result = ({ result, openPopup }) => {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt={result.Title} />
      <h3>
        {result.Title} ({result.Year})
      </h3>
    </div>
  );
};

export default Result;
