import React, { Component } from "react";

class FormRowText extends Component {
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
          <input
            type="text"
            placeholder={`enter book ${identifier}`}
            className="form-control"
            onChange={this.handleInputChange}
            name={identifier}
            value={value}
            id={identifier}
          />
        </div>
      </div>
    );
  }
}

export default FormRowText;
