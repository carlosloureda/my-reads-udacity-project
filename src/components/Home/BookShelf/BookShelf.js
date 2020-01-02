import React from "react";
import PropTypes from "prop-types";

import BooksGrid from "../../BooksGrid";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";

class BookShelf extends React.PureComponent {
  render() {
    const { shelfName, books, onBookShelfChange } = this.props;
    return (
      <S.BookShelf>
        <h2>{shelfName}</h2>
        <div css={{ textAlign: "center" }}>
          <BooksGrid books={books} onBookShelfChange={onBookShelfChange} />
        </div>
      </S.BookShelf>
    );
  }
}

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array,
  onBookShelfChange: PropTypes.func.isRequired
};

const S = {};
S.BookShelf = styled.div`
  padding: 0 10px 20px;
  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
  & > h2 {
    border-bottom: 1px solid #dedede;
  }
`;

export default BookShelf;
