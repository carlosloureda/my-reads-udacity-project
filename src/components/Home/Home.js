import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookShelf from "./BookShelf";
import Header from "../Header";
import styled from "@emotion/styled";
import AddIconImg from "./../../icons/add.svg";

// TODO: Think of a better way of having this coming from the shelves state?
const SHELVES_NAMES = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want to Read",
  read: "Read"
};

class Home extends Component {
  // TODO: CodeReview
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  handleInitialState = books => {
    console.log("handleInitialState called");
    let booksInShelves = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };

    Object.values(books).map(book => {
      return booksInShelves[book.shelf].push(book);
    });
    this.setState({
      currentlyReading: booksInShelves["currentlyReading"],
      wantToRead: booksInShelves["wantToRead"],
      read: booksInShelves["read"]
    });
  };

  componentDidMount() {
    // console.log("1. componentDidMount called");
    this.handleInitialState(this.props.books);
  }
  // need to use componentWillReceiveProps as setting state from props is an antipattern
  componentDidUpdate(prevProps) {
    // console.log("2. componentDidUpdate called");
    const {
      shelves: {
        currentlyReading: prevCurrentlyReading,
        wantToRead: prevWantToRead,
        read: prevRead
      }
    } = prevProps;

    const {
      shelves: { currentlyReading, wantToRead, read }
    } = this.props;

    if (
      currentlyReading.length !== prevCurrentlyReading.length ||
      wantToRead.length !== prevWantToRead.length ||
      read.length !== prevRead.length
    ) {
      // console.log("3. componentDidUpdate called with different props");
      this.handleInitialState(this.props.books);
    }
  }

  render() {
    const { shelves, onBookShelfChange } = this.props;
    return (
      <S.ListBooksContent>
        <Header />
        <div>
          <div>
            {Object.keys(shelves).map(shelf => (
              <BookShelf
                key={shelf}
                shelfName={SHELVES_NAMES[shelf]}
                books={this.state[shelf]}
                onBookShelfChange={onBookShelfChange}
              />
            ))}
          </div>
        </div>
        <S.OpenSearch>
          <Link to="/search">Add a book</Link>
        </S.OpenSearch>
      </S.ListBooksContent>
    );
  }
}

const S = {};
S.ListBooksContent = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;
S.OpenSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  & > a {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2e7d32;
    background-image: url("${AddIconImg}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    font-size: 0;
    outline: 0;

    &:hover{
      background-color: rgb(0, 102, 0);
    }
  }
`;

Home.propTypes = {
  books: PropTypes.object.isRequired,
  shelves: PropTypes.shape({
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired
  }).isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default Home;
