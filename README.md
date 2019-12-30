# My Reads

First project application for Udacity's React Nanodegree. This app is about having a collection of books stored in 3 different shelves (Currently Reading, Want to Read & Read).

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

## Support

<!-- TODO: Chantge the REPO_URL variable into the real repository URL -->

Please [open an issue](https://github.com/{REPO_URL}/readme-boilerplate/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and
