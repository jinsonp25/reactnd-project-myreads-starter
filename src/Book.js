import React, { Component } from 'react'

class Book extends Component {

  book;
  onChangeBookshelf;

  constructor(props) {
    super(props);
    this.book = this.props.book;
    this.onChangeBookshelf = this.props.onChangeBookshelf;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('shelf', event.target.value)
    //this.onChangeBookshelf(this.book, event.target.value);
  }

  render() {
    const { title, authors, imageLinks, shelf } = this.book;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, 
            backgroundImage: `url(${imageLinks.thumbnail})` }}>
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.handleChange} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      <div className="book-title">{title}</div>
      {
        authors.map((author, index) => (
          <div key={index} className="book-authors">{author}</div>)
        )
      }
      </div>
    );
  }
}

export default Book;