import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
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
                                    books={this.props.books.filter(book => book.shelf === shelf[0])}
                                    updateShelf={this.props.updateShelf}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Bookshelf