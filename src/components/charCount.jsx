// CharacterCount.js
import React from "react";
import "../styles/style.css";

const CharacterCount = ({ limit }) => (
  <p>
    Characters remaining: {limit}
  </p>
);

export default CharacterCount;
