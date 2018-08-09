import React, { Component } from "react";

class FormRowNumeric extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = e => {
    this.props.onInputChange(e);
  };

  render() {
    const { caption, identifier, value } = this.props;
    return (
      <div className="row m-1">
        <div className="col-md-3 form-title-label">
          <label htmlFor={identifier}>{caption}</label>
        </div>
        <div className="col-md-9">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              onChange={this.handleInputChange}
              name={identifier}
              value={value}
              id={identifier}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormRowNumeric;
