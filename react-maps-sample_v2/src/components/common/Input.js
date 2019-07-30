import React from "react";
import "./Input.css";

/**
 * Custom Input Field
 */
const Input = ({ name, value, handleClearClick, handleChange, label }) => {
  return (
    <div>
      <div className="Input_Container form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          className="form-control"
          name={name}
          value={value}
          onChange={handleChange}
          autoComplete="off"
        />

        <div
          className="icon"
          title="clear"
          onClick={() => handleClearClick({ name })}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default Input;
