// BodyTextArea.js
import React from "react";

const BodyTextArea = ({ value, onChange }) => (
  <textarea
    placeholder="Body"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  ></textarea>
);

export default BodyTextArea;
