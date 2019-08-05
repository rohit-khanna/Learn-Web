import React from "react";

const SelectInput = ({
  name,
  label,
  onChange,
  value,
  error,
  options,
  defaultOption
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map(opt => (
            <option value={opt.value} key={opt.value}>
              {opt.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
