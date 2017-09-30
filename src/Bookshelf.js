import React from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

const Bookshelf = (props) => {
    const shelves = [
        ["currentlyReading","Currently Reading"], 
        ["wantToRead","Want To Read"],
        ["read", "Read"]]

    return (
        <div className="list-books-content">
            {shelves.map((shelf, key) => {
                return (
                    <div key={key} className="bookshelf">
                        <h2 className="bookshelf-title">{shelf[1]}</h2>
                        <div className="bookshelf-books">
                            <ListBooks
                                books={props.books.filter(book => book.shelf === shelf[0])}
                                updateShelf={props.updateShelf}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default Bookshelf