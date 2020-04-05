import React, { useState } from "react";
import "./App.css";

import api from "./api/api";
import apikey from "./api/apikey";

import Search from "./components/Search";
import Results from "./components/Results";
import PopUp from "./components/Popup";

const App = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = async (e) => {
    if (e.key === "Enter") {
      let results = await api(`/?apikey=${apikey}&s=${state.s}`);

      setState((prevState) => {
        return { ...prevState, results: results.data.Search };
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s };
    });
  };

  const openPopup = async (id) => {
    let result = await api(`/?apikey=${apikey}&i=${id}`);

    console.log(result);

    setState((prevState) => {
      return { ...prevState, selected: result.data };
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
      </header>

      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title !== "undefined" ? (
          <PopUp selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
};

export default App;
