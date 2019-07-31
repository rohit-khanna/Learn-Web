import React, { Component } from "react";
import "./UnControlledInput.css";
import { PlacesService } from "../../../services/";
const placesEndpoint = process.env.PLACES_API_URL;

class UnControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      inputValue: "",
      showDataList: false
    };
  }

  onTextChange = ev => {
    const { value } = ev.target;

    if (this.state.inputValue !== value) {
      if (value.length > 2) {
        PlacesService.searchPlaces(value, placesEndpoint)
          .then(data => {
            this.setState({
              dataList: data.map(x => x.name),
              showDataList: true
            });
          })
          .catch(err => {
            alert(err);
          });
      } else {
        this.setState({ inputValue: value });
      }
    }
  };

  onPlaceChange = ev => {
    const { name, handleChange } = this.props;
    const { textContent } = ev.target;
    this.setState({ showDataList: false, inputValue: textContent });
    handleChange(name, textContent);
  };
  render() {
    const { name, handleClearClick, label, inProgress } = this.props;

    const { inputValue, showDataList, dataList } = this.state;
    return (
      <div>
        <div className="Input_ContainerNew form-group">
          <label htmlFor={name}>{label}</label>
          <input
            type="text"
            className="form-control"
            name={name}
            value={inputValue}
            onChange={this.onTextChange}
            disabled={inProgress}
            autoComplete="off"
          />

          <div
            className="icon"
            title="clear"
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => handleClearClick({ name })}
            hidden={inProgress}
          >
            x
          </div>
        </div>
        {showDataList && (
          <ul className="dataList" onClick={this.onPlaceChange}>
            {dataList.map(x => {
              return <li key={x}>{x}</li>;
            })}{" "}
          </ul>
        )}
      </div>
    );
  }
}

export default UnControlledInput;
