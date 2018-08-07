import React, { Component } from "react";
import { booksCollection } from "./dataprovider";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetails: {},
      __id: this.props.match.params.id
    };
    //console.log("bdc:", this.props.match.params.id);
  }

  componentDidMount() {
    //console.log("bookDet-CDM");

    const bookDetails = booksCollection.find(val => {
      //  console.log(val.id, this.state.__id);
      return val.id.toString() === this.state.__id;
    });
    //console.log("cdm-", bookDetails);

    if (bookDetails) this.setState({ bookDetails: bookDetails });
  }

  componentWillUnmount() {
    //console.log("unmount");
  }
  render() {
    // //console.log(this.state.bookDetails);
    //  //console.log(this.state.__id);
    let exprsn =
      this.state.bookDetails == null ? (
        <div />
      ) : (
        <div>
          <h3>Book Details for ID: {this.state.bookDetails.id}</h3>
          <p>
            <b className="m-2">Title:</b>
            {this.state.bookDetails.title}
          </p>
          <p>
            <b className="m-1">Author:</b> {this.state.bookDetails.Author}
          </p>
          <p>
            <b className="m-2">Price:</b> {this.state.bookDetails.price}
          </p>
        </div>
      );
    return exprsn;
  }
}

export default BookDetails;
