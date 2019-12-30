# My Reads

First project application for Udacity's React Nanodegree. This app is about having a collection of books stored in 3 different shelves (Currently Reading, Want to Read & Read).

I am recording some videos developing this application so my mentees can have an idea of other approaches on developing this Nanodegree project when they pass it by themselves.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components Schema](#componentsSchema)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Download to your project directory, install dependcies and run it:

```bash
git clone {REPO_URL} .
npm install
npm start
```

## Usage

On the homepage of the application user will see the books he/she have on his collection, spread on the 3 different categories/shelves.
Clicking on a single book the user will be able to change a book from one shelf to another one.
Also there is available a search page where the user can look for some new books to add into his/her collection. The search results are restricted to the strings declared on the `SEARCH_TERMS.md` file

## ComponentsSchema

- Home
  - Header
  - Shelves (3)
  - Book -- With the Dropdown (Option 1)
    - Dropdown as a Book's Child (Option 2)
- Search
  - Header / SearchBar
  - SearchResults
    - Book

### Books Schema

A book retrieved from the API would have this kind of shape:

```
let book = {
    title: "The Linux Command Line",
    subtitle: "A Complete Introduction",
    authors: ["William E. Shotts, Jr."],
    publisher: "No Starch Press",
    publishedDate: "2012",
    description:
    "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power ,of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's Evolution of a SysAdmin",
    industryIdentifiers: [],
    readingModes: { text: true, image: false },
    pageCount: 480,
    printType: "BOOK",
    categories: ["COMPUTERS"],
    averageRating: 4,
    ratingsCount: 2,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: true,
    contentVersion: "1.2.2.0.preview.2",
    panelizationSummary: {
    containsEpubBubbles: false,
    containsImageBubbles: false
    },
    imageLinks: {
    smallThumbnail:
        "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    thumbnail:
        "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    language: "en",
    previewLink:
    "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    infoLink:
    "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    canonicalVolumeLink:
    "https://market.android.com/details?id=book-nggnmAEACAAJ",
    id: "nggnmAEACAAJ",
    shelf: "currentlyReading"
};

```

But for our coding we will be needing just these properties:

```
let book = {
    title: "The Linux Command Line",
    authors: ["William E. Shotts, Jr."],
    imageLinks: {
    smallThumbnail:
        "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    thumbnail:
        "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    id: "nggnmAEACAAJ",
    shelf: "currentlyReading"
};
```

### State Schema

- App (previously thougth of Home, but see the improvement 1 point):

  - Will have a `books` object with the id of each book as a key and the whole book as the value for each key.
  - `shelves` object with 3 properties (1 for each shelve) and inside an array of books Ids to refernce the books in the `books` state

- Search Page
  - Will have a `searchResults` array of books for the query launched

IMPROVEMENT 1:

As the search page will need to have access to the `books` to show which ones we already have on our shelves we need to lift up this state to the parent component. This component can just be the App.js

## Support

<!-- TODO: Chantge the REPO_URL variable into the real repository URL -->

Please [open an issue](https://github.com/{REPO_URL}/readme-boilerplate/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and
