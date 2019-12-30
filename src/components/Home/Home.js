import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";
import Header from "../Header";

// TODO: Think of a better way of having this coming from the shelves state?
const SHELVES_NAMES = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read"
};

class Home extends Component {
  // TODO: CodeReview
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  // need to use componentWillReceiveProps as setting state from props is an antipattern
  componentWillReceiveProps(nextProps) {
    const { books } = nextProps;
    let booksInShelves = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };

    Object.values(books).map(book => {
      return booksInShelves[book.shelf].push(book);
    });
    this.setState({
      currentlyReading: booksInShelves["currentlyReading"],
      wantToRead: booksInShelves["wantToRead"],
      read: booksInShelves["read"]
    });
  }

  render() {
    const { shelves, onBookShelfChange } = this.props;
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            {Object.keys(shelves).map(shelf => (
              <BookShelf
                key={shelf}
                shelfName={SHELVES_NAMES[shelf]}
                books={this.state[shelf]}
                onBookShelfChange={onBookShelfChange}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  books: PropTypes.object.isRequired,
  shelves: PropTypes.shape({
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired
  }).isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default Home;
