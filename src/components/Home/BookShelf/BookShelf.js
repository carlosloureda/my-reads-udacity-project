import React from "react";
import PropTypes from "prop-types";

import BooksGrid from "../../BooksGrid";
import "./BookShelf.css";

class BookShelf extends React.PureComponent {
  render() {
    const { shelfName, books, onBookShelfChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={books} onBookShelfChange={onBookShelfChange} />
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array,
  onBookShelfChange: PropTypes.func.isRequired
};
export default BookShelf;
