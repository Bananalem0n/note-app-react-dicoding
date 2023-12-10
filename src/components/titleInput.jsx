// TitleInput.js
import React from "react";

const TitleInput = ({ value, onChange, titleLimit }) => (
  <>
    <input
      className="input-field"
      type="text"
      placeholder="Title"
      value={value}
      onChange={onChange}
    />
    <p>Characters remaining: {titleLimit}</p>
  </>
);

export default TitleInput;
