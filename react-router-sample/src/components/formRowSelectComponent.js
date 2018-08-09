import React, { Component } from "react";

class FormRowSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.props.onChange(e);
  };
  render() {
    const {
      caption,
      identifier,
      selectedValueArray,
      valueArray,
      multi
    } = this.props;
    return (
      <div className="row m-1">
        <div className="col-md-3 form-title-label">
          <label htmlFor={identifier}>{caption}</label>
        </div>
        <div className="col-md-9">
          <select
            multiple={multi}
            value={[...valueArray]}
            onChange={this.handleChange}
            id={identifier}
            className="form-control"
            name={identifier}
          >
            {selectedValueArray &&
              selectedValueArray.map((val, index) => {
                return (
                  <option value={val} key={val}>
                    {val}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    );
  }
}

export default FormRowSelect;
