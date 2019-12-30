import React, { Component } from "react";

import BookShelf from "./BookShelf";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <BookShelf shelfName={"Currently Reading"} />
            <BookShelf shelfName={"Want to Read"} />
            <BookShelf shelfName={"Read"} />
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

export default Home;
