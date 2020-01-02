import React, { PureComponent } from "react";
import Book from "../Book";
import PropTypes from "prop-types";
import "./BooksGrid.css";

class BooksGrid extends PureComponent {
  render() {
    const { books, onBookShelfChange } = this.props;
    return (
      <ol className="books-grid">
        {books &&
          books.map(book => (
            <li key={book.id}>
              <Book book={book} onBookShelfChange={onBookShelfChange} />
            </li>
          ))}
      </ol>
    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array,
  onBookShelfChange: PropTypes.func.isRequired
};

export default BooksGrid;
