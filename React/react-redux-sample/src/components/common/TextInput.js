import React from "react";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = "form-group";
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
