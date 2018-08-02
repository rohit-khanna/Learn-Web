import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.newValue);
    this.setState({ newValue: "" });
  };
  render() {
    return (
      <form
        style={{
          right: "50px",
          position: "absolute"
        }}
        className="form-inline"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control"
          type="text"
          value={this.state.newValue}
          onChange={evt => {
            this.setState({ newValue: evt.target.value });
          }}
          placeholder="Add new Item"
        />
        <input className="form-control btn btn-default m-2" type="submit" />
      </form>
    );
  }
}

export default AddItem;
