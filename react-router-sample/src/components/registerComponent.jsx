import React, { Component } from "react";
import { booksCollection, tagsCollection } from "./dataprovider";
import FormRowText from "./formRowComponent";
import FormRowNumeric from "./formRowNumComponent";
import FormRowSelect from "./formRowSelectComponent";

class Register extends Component {
  constructor(props) {
    super(props);
    //this.tags = [];
    this.state = {
      obj: {
        title: "",
        author: "",
        price: 0,
        RK: "",
        tags: []
      },
      tagsList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    let tagsList = tagsCollection;
    this.setState({ tagsList: tagsList });
  }
  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (target.type === "number") {
      value = value < 0 ? 0 : value;
    }
    const __obj = this.state.obj;
    __obj[name] = value;
    this.setState({
      obj: __obj
    });
  }

  handleSelectChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (target.type === "number") {
      value = value < 0 ? 0 : value;
    }
    const __obj = this.state.obj;
    let indexOfEle = __obj[name].indexOf(value);
    if (indexOfEle < 0) __obj[name].push(value);
    else __obj.tags.splice(indexOfEle, 1);
    this.setState({
      obj: __obj
    });
  }

  handleSubmit(e) {
    let newObj = this.state.obj;
    newObj.id = new Date().getMilliseconds();
    booksCollection.push(newObj);
    alert("added");
    this.handleClear();
    e.preventDefault();
  }
  handleClear(e) {
    let emptyObj = { title: "", price: 0, author: "", tags: [] };
    this.setState({
      obj: emptyObj
    });
  }

  render() {
    const { title, author, price, tags } = this.state.obj;
    return (
      <div className="container ">
        <br />
        <u>
          <h4>Add new Book</h4>
        </u>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="container" style={{ width: "50%" }}>
            <FormRowText
              caption="Title"
              identifier="title"
              value={title}
              onInputChange={this.handleInputChange}
            />
            <FormRowText
              caption="Author"
              identifier="author"
              value={author}
              onInputChange={this.handleInputChange}
            />
            <FormRowNumeric
              caption="Price"
              identifier="price"
              value={price}
              onInputChange={this.handleInputChange}
            />
            <FormRowSelect
              caption="Tags"
              identifier="tags"
              multi={true}
              onChange={this.handleSelectChange}
              selectedValueArray={this.state.tagsList}
              valueArray={tags}
            />
            <div className="row m-5">
              <div className="col-md-2" />
              <div className="col-md-4">
                <input
                  type="submit"
                  title="Add"
                  className="btn btn-primary btn-lg"
                  value="Add"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="button"
                  title="clear"
                  onClick={this.handleClear}
                  className="btn btn-default btn-lg"
                  value="Clear"
                />
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
