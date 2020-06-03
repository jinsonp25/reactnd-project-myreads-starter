import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

  render() {
    const { books, onChangeBookshelf } = this.props;
    const bookshelves = [];
    let lastShelf = null;
    books.forEach((book) => {
      if (book.shelf !== lastShelf) {
        bookshelves.push({
            'shelf': book.shelf,
            'books': [],
        });
      }
      lastShelf = book.shelf;
      bookshelves[bookshelves.length-1].books.push(book);
    });
    console.log('bookshelves', bookshelves)
    return (
      <div>
        {
          bookshelves.map((bookshelf) => {
            return (
              <div key={bookshelf.shelf} className="bookshelf">
                <h2 className="bookshelf-title">{bookshelf.shelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      bookshelf.books.map((book) => {
                        return (
                          <li key={book.id} >
                            <Book
                              book={book}
                              onChangeBookshelf={onChangeBookshelf}
                            />
                          </li>
                        )
                      })
                    }
                  </ol>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

}

export default Bookshelf