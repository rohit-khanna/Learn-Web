import React from "react";
import "./SearchComponent.css";

const SearchComponent = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flexForm">
      <input
        type="number"
        id="userID"
        className="form-control"
        placeholder="enter record ID to search"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
