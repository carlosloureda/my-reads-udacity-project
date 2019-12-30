import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    const { book, onBookShelfChange } = this.props;
    const { id, title, authors, imageLinks, shelf } = book;
    const bookCoverUrl = imageLinks && imageLinks.thumbnail;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: 'url("' + bookCoverUrl + '")'
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={e => {
                let newShelf = e.target.value;
                onBookShelfChange(id, newShelf);
              }}
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
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string,
      thumbnail: PropTypes.string
    }).isRequired,
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
  }).isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default Book;
