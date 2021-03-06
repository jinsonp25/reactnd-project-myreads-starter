import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  changeBookshelf = (book, shelf) => {
    let newbooks = [...this.state.books];
    const pos =  newbooks.indexOf(book);
    newbooks[pos].shelf = shelf;
    this.setState(() => ({
      books: newbooks
    }))
    BooksAPI.update(book, shelf)
      .then((b) => {
        console.log('UPDATE', b)
    })
  }

  render() {
    return (
      <div className="app">
        {
          this.state.showSearchPage ? (
            <div className="search-books">
              <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author"/>

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
          ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Bookshelf className="list-books-content"
                books={this.state.books}
                onChangeBookshelf={this.changeBookshelf}
              />
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default BooksApp
