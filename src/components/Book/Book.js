import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import arrowImg from "./../../icons/arrow-drop-down.svg";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const S = {};
S.Book = styled.div`
  width: 140px;
`;
S.BookTop = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;
S.BookShelfChanger = styled("div")`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url(${arrowImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  & > select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
S.BookTitle = styled.div`
  margin-top: 10px;
`;
S.BookAuthors = styled.div`
  color: #999;
`;

const COVER_NOT_AVAILABLE_URL = "https://i.imgur.com/sJ3CT4V.gif";
S.BookCover = styled.div(
  {
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    width: 128,
    height: 193
  },
  props => ({
    background: props.bookCoverUrl
      ? 'url("' + props.bookCoverUrl + '")'
      : 'url("' + COVER_NOT_AVAILABLE_URL + '")',
    backgroundSize: "contain"
  })
);

class Book extends PureComponent {
  render() {
    const { book, onBookShelfChange } = this.props;
    const { title, authors, imageLinks, shelf } = book;
    const bookCoverUrl = imageLinks && imageLinks.thumbnail;
    return (
      <S.Book>
        <S.BookTop>
          <S.BookCover bookCoverUrl={bookCoverUrl}></S.BookCover>
          <S.BookShelfChanger>
            <select
              onChange={({ target: { value: newShelf } }) =>
                onBookShelfChange(book, newShelf)
              }
              defaultValue={shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </S.BookShelfChanger>
        </S.BookTop>
        <S.BookTitle css={{ fontSize: "0.8em" }}>{title}</S.BookTitle>
        <S.BookAuthors css={{ fontSize: "0.8em" }}>
          {authors && authors.map(author => author)}
        </S.BookAuthors>
      </S.Book>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string,
      thumbnail: PropTypes.string
    }),
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
  }).isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default Book;
