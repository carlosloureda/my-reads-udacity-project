import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as BooksAPI from "./../../api/BooksAPI";
import BooksGrid from "../BooksGrid";
import "./Search.css";

class Search extends Component {
  state = {
    booksSearched: []
  };

  // compares with the books in our library and if they are there we set the shelf
  setDefaultShelves = bookResults => {
    const { books: booksInLibrary } = this.props;

    return bookResults.map(book => ({
      ...book,
      shelf: booksInLibrary[book.id] ? booksInLibrary[book.id].shelf : "none"
    }));
  };

  onQueryEntered = async ({ target: { value: query } }) => {
    // TODO: add throttle / debounceasdas
    // TODO: solve the quick deletion from the input that shows not proper content
    // console.log("onQueryEntered e: ", query);
    if (query && query !== "") {
      console.log(typeof query);
      console.log(query.length);
      let bookResults = await BooksAPI.search(query);
      if (bookResults && !bookResults.error) {
        this.setState({
          booksSearched: this.setDefaultShelves(bookResults)
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
          <BooksGrid
            books={booksSearched}
            onBookShelfChange={onBookShelfChange}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default Search;
