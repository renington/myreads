import React, { Component } from 'react';
import PropTypes from 'prop-types'


const ListBooks = (props) => {
    return (
        <ol className="books-grid">
            {props.books.map((book, key) => (
            <li key={key}>
                <div className="book" >
                    <div className="book-top">
                    <div className='book-cover' style={{
                        width: 128, 
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                    }}/>
                        <div className="book-shelf-changer">
                            <select value={book.shelf ? book.shelf : 'none'} onChange={(event)=>{props.updateShelf(book, event.target.value)}}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{(book.authors!==undefined && book.authors.length>0)?book.authors.join(', '):''}</div>
                </div>
            </li>
            ))}
        </ol>
    )
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default ListBooks