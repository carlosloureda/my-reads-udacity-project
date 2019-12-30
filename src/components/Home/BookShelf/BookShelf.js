import React from "react";
import PropTypes from "prop-types";

import Book from "../../Book";

class BookShelf extends React.PureComponent {
  render() {
    const { shelfName, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.map(book => (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array
};
export default BookShelf;
