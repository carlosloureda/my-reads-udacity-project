import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as BooksAPI from "./../../api/BooksAPI";
import BooksGrid from "../BooksGrid";
import styled from "@emotion/styled";
import arrowBackImg from "./../../icons/arrow-back.svg";
/** @jsx jsx */
import { jsx } from "@emotion/core";

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
      <div>
        <S.SearchBooksBar>
          <Link to="/">Close</Link>
          <div css={{ flex: "1", background: "#e9e" }}>
            <input
              type="text"
              placeholder="Search by title or author"
              autoFocus
              onChange={this.onQueryEntered}
            />
          </div>
        </S.SearchBooksBar>
        <div css={{ padding: "80px 10px 20px" }}>
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

const S = {};
S.SearchBooksBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
  & > a {
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background-image: url(${arrowBackImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    border: none;
    outline: none;
  }
  & input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }
`;

export default Search;
