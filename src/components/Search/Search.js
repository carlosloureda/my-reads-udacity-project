import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as BooksAPI from "./../../api/BooksAPI";
import Book from "./../Book";

class Search extends Component {
  state = {
    booksSearched: []
  };
  onQueryEntered = async ({ target: { value: query } }) => {
    // TODO: add throttle / debounceasdas
    // TODO: solve the quick deletion from the input that shows not proper content
    console.log("onQueryEntered e: ", query);
    if (query && query !== "") {
      console.log(typeof query);
      console.log(query.length);
      let bookResults = await BooksAPI.search(query);
      if (bookResults && !bookResults.error) {
        this.setState({
          booksSearched: bookResults
        });
      } else {
        console.error("An error happened: ", bookResults);
      }
    } else {
      console.log("Empty query ", query);
      this.setState(
        {
          booksSearched: []
        },
        () => console.log("new state: ", this.state)
      );
    }
  };

  render() {
    console.log("re-render, this.state:, ", this.state);
    const { booksSearched } = this.state;
    const { onBookShelfChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              autoFocus
              onChange={this.onQueryEntered}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksSearched &&
              booksSearched.map(book => (
                <li key={book.id}>
                  <Book book={book} onBookShelfChange={onBookShelfChange} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  // books: PropTypes.array,
  onBookShelfChange: PropTypes.func.isRequired
};

export default Search;
