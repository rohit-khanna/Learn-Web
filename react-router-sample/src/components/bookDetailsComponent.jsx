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
    const bookDetails = booksCollection.find(val => {
      return val.id.toString() === this.state.__id;
    });

    if (bookDetails) this.setState({ bookDetails: bookDetails });
  }

  render() {
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
            <b className="m-1">Author:</b> {this.state.bookDetails.author}
          </p>
          <p>
            <b className="m-2">Price:</b> {this.state.bookDetails.price}
          </p>
          <p>
            <b className="m-2">Tags:</b>
            {this.state.bookDetails.tags &&
              this.state.bookDetails.tags.map((tag, index) => {
                return (
                  <span
                    className="badge badge-pill badge-warning m-1"
                    key={index}
                  >
                    {tag}
                  </span>
                );
              })}
          </p>
        </div>
      );
    return exprsn;
  }
}

export default BookDetails;
