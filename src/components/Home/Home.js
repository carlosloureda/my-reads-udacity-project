import React, { Component } from "react";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";
import Header from "./Header";

// TODO: Think of a better way of having this coming from the shelves state?
const SHELVES_NAMES = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read"
};

class Home extends Component {
  // TODO: CodeReview
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  };
  componentDidMount() {
    const { books } = this.props;
    let booksInShelves = {
      currentlyReadingBooks: [],
      wantToReadBooks: [],
      readBooks: []
    };

    Object.values(books).map(book => booksInShelves[book.shelf].push(book));
    this.setState({
      currentlyReadingBooks: booksInShelves["currentlyReading"],
      wantToReadBooks: booksInShelves["wantToReadBooks"],
      readBooks: booksInShelves["readBooks"]
    });
  }
  render() {
    const { shelves } = this.props;
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            {Object.keys(shelves).map(shelf => (
              <BookShelf
                shelfName={SHELVES_NAMES[shelf]}
                books={this.state[shelf]}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
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
  }).isRequired
};

export default Home;
