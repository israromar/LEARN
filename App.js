import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "HELLO WORLD!")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
