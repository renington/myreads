import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import {Route, Link} from 'react-router-dom'

import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
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

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
          )} />
          
          <Route exact path="/" render={() => (
              <div className="shelves">
                <Bookshelf
                  books={this.state.books}
                  updateShelf={this.updateShelf}
                />
              
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
          )}
          />
          
           
        
        
      </div>
    )
  }
}

export default BooksApp
