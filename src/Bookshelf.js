import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

  render() {
    const { books, onChangeBookshelf } = this.props;
    const shelves = ['Currently Reading', 'Want to Read', 'Read'];
    let key_s, bookshelf;
    return (
      <div>
        { 
          shelves.map(shelf => {
            key_s = shelf.toLocaleLowerCase().replace(/ /g, "");
            bookshelf = books.filter(
              bookshelf => bookshelf.shelf.toLocaleLowerCase() === key_s
            );
            return (
              <div key={shelf} className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                  {
                    bookshelf.length !== 0 ? (
                      <ol className="books-grid">
                        {
                          bookshelf.map((book) => {
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
                    ) : (
                     <p>NONE</p>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }

}

export default Bookshelf