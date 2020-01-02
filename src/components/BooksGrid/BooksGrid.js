import React, { PureComponent } from "react";
import Book from "../Book";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

class BooksGrid extends PureComponent {
  render() {
    const { books, onBookShelfChange } = this.props;
    return (
      <S.BooksGrid>
        {books &&
          books.map(book => (
            <li key={book.id}>
              <Book book={book} onBookShelfChange={onBookShelfChange} />
            </li>
          ))}
      </S.BooksGrid>
    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array,
  onBookShelfChange: PropTypes.func.isRequired
};

const S = {};
S.BooksGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > li {
    padding: 10px 15px;
    text-align: left;
  }
`;

export default BooksGrid;
