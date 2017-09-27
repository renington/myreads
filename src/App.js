import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import {Route, Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    booksResult: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateShelf = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        BooksAPI.getAll().then((books) => {
          this.setState({ books: books })
        })
      })
    }
  }

  clearQuery = () => {
    this.setState({ booksResult: []})
  }

  search = (query) => {
    if (!query) {
      this.setState({books: []})
    } else {
      BooksAPI.search(query).then((books) => {
        books.map(book => (this.state.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({ booksResult: books })
      })
    }
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <div className="search-books">
              <Search search={this.search} />
              <div className="search-books-results">
                <ListBooks
                    books={this.state.booksResult}
                    updateShelf={this.updateShelf}
                />
              </div>
            </div>
          )} />
          
          <Route exact path="/" render={() => (
              <div className="shelves">
                <Bookshelf
                  books={this.state.books}
                  updateShelf={this.updateShelf}
                />
              
                <div className="open-search">
                  <Link onClick={this.clearQuery} to="/search">Add a book</Link>
                </div>
              </div>
          )}
          />
      </div>
    )
  }
}

export default BooksApp
