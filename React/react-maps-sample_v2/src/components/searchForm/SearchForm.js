import React from "react";
import UnControlledInput from "../common/uncontrolledInput";
import "./SearchForm.css";

const SearchForm = ({
  formValues,
  handleClearClick,
  handleReset,
  handleChange,
  handleSubmit,
  inProgress,
  ...props
}) => {
  return (
    <form
      className="SearchComponent_Container"
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <UnControlledInput
        name="startLocation"
        label="Start Location"
        value={formValues.startLocation}
        handleClearClick={handleClearClick}
        handleChange={handleChange}
        inProgress={inProgress}
      />
      <UnControlledInput
        name="endLocation"
        label="Destination Location"
        value={formValues.endLocation}
        handleClearClick={handleClearClick}
        handleChange={handleChange}
        inProgress={inProgress}
      />
      {props.children}
      <div className="buttonGroup">
        <button type="submit" disabled={inProgress} className="btn btn-primary">
          {inProgress ? "Submitting..." : "Submit"}
        </button>
        <button
          type="reset"
          disabled={inProgress}
          className="btn btn-outline-secondary"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
