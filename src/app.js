import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" },
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Sven",
      animal: "Dog",
      breed: "Minecraft",
    }),
    React.createElement(Pet, { name: "Nala", animal: "Dog", breed: "Kundel" }),
    React.createElement(Pet, { name: "Bengt", animal: "Fox", breed: "Void" })
  );
};
render(React.createElement(App), document.querySelector("#root"));
