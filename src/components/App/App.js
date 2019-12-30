import React from "react";
import * as BooksAPI from "../../api/BooksAPI";
import "./App.css";
import Home from "../Home";
import Search from "../Search";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    // Will store a key-value pair, key the bookId and the value the book object
    books: {},
    // Inside each array we will have the bookIds of the books in that shelve
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  async componentDidMount() {
    let booksArr = await BooksAPI.getAll();
    let booksObject = {};
    let shelves = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
    if (booksArr && booksArr.length) {
      booksObject = booksArr.reduce((books, book) => {
        shelves[book.shelf].push(book.id);
        books[book.id] = book;
        return books;
      }, {});
    }
    this.setState({
      books: booksObject,
      shelves
    });
  }

  render() {
    const { books, shelves } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <Home books={books} shelves={shelves} />
        )}
      </div>
    );
  }
}

export default BooksApp;
