import React, { Component } from "react";
import PropTypes from "prop-types";

// TODO: fix these 2 contants when we add Emotion/styled-components
const existingImage = bookCoverUrl => ({
  width: 128,
  height: 193,
  backgroundImage: 'url("' + bookCoverUrl + '")'
});

const missingImage = {
  width: 128,
  height: 193,
  background: 'url("https://i.imgur.com/sJ3CT4V.gif") no-repeat',
  backgroundSize: "contain"
};

class Book extends Component {
  render() {
    const { book, onBookShelfChange } = this.props;
    const { title, authors, imageLinks, shelf } = book;
    const bookCoverUrl = imageLinks && imageLinks.thumbnail;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={bookCoverUrl ? existingImage(bookCoverUrl) : missingImage}
          ></div>
          <div className="book-shelf-changer">
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
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors && authors.map(author => author)}
        </div>
      </div>
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
