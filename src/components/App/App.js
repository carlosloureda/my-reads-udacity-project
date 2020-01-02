import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as BooksAPI from "../../api/BooksAPI";
import "./App.css";
import Home from "../Home";
import Search from "../Search";
import NotFound from "../NotFound";

class BooksApp extends React.Component {
  state = {
    // Will store a key-value pair, key the bookId and the value the book object
    books: {},
    // Inside each array we will have the bookIds of the books in that shelve
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  // Required for our search page, when we add a new element
  bookIsInOurLibrary = bookId => (this.state.books[bookId] ? true : false);

  onBookShelfChange = async (book, newShelf) => {
    let previousStateForOptimisticUI = this.state;

    let booksCopy = Object.assign({}, this.state.books);
    let shelvesCopy = Object.assign({}, this.state.shelves);

    // On book shelf change of remove from shelf we need to remove the bookId
    // from the old shelf. For new self depends on if it is an existant shelf or none.
    if (this.bookIsInOurLibrary(book.id)) {
      let oldShelf = this.state.books[book.id].shelf;
      shelvesCopy = {
        ...shelvesCopy,
        [oldShelf]: shelvesCopy[oldShelf].filter(_bookId => _bookId !== book.id)
      };
    }

    if (newShelf === "none") {
      delete booksCopy[book.id];
    } else {
      booksCopy = {
        ...booksCopy,
        [book.id]: {
          ...book,
          shelf: newShelf
        }
      };
      // TODO: Would be great to find a way of updating [newShelf] conditionally
      // in the nested update :D
      shelvesCopy = {
        ...shelvesCopy,
        [newShelf]: shelvesCopy[newShelf].concat(book.id)
      };
    }

    this.setState({
      books: booksCopy,
      shelves: shelvesCopy
    });

    try {
      await BooksAPI.update(book, newShelf);
      // If we manage errors on the BooksAPI we might inspect also the returned
      // response from this update call
    } catch (e) {
      console.log("Error happened on the update API query: ", e);
      this.setState(previousStateForOptimisticUI);
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then(booksArr => {
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
    });
  }

  render() {
    const { books, shelves } = this.state;
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  books={books}
                  shelves={shelves}
                  onBookShelfChange={this.onBookShelfChange}
                />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <Search
                  onBookShelfChange={this.onBookShelfChange}
                  books={books}
                />
              )}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
