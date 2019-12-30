import React from "react";
import Book from "../../Book";

const bookExample = {
  title: "To Kill a Mockingbird",
  authors: ["Harper Lee"],
  imageLinks: {
    smallThumbnail:
      "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    thumbnail:
      "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  },
  id: "nggnmAEACAAJ",
  shelf: "currentlyReading"
};

class BookShelf extends React.PureComponent {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book book={bookExample} />
            </li>
            <li>
              <Book book={bookExample} />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
