import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import BookDetails from "./bookDetailsComponent";
import booksCollection from "./dataprovider";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBooks: []
    };
  }
  componentDidMount() {
    //console.log("bookCom-CDM");

    const listOfBooks = booksCollection;
    // //console.log(listOfBooks);
    this.setState({ listOfBooks: listOfBooks });
  }
  render() {
    //console.log("bookCom- Render");
    //console.log(this.state.listOfBooks);

    return (
      <div
        className="container "
        style={{ color: "black", marginTop: 20, textAlign: "left" }}
      >
        <div className="row">
          <div className="col-md-7">
            <h3>List of Books</h3>
            <ul>
              {this.state.listOfBooks.map(book => {
                return (
                  <li key={book.id} title="Click to open">
                    <Link to={`${this.props.match.url}/${book.id}`}>
                      <b>{book.title}</b> by <i>{book.Author}</i>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-5">
            <Route
              path={`${this.props.match.url}/:id`}
              //component={BookDetails}
              component={props => (
                <BookDetails {...props} url={`${this.props.match.url}/:id`} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
