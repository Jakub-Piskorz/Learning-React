import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something important">Adopt meh!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.querySelector("#root"));
