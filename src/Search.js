import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

// Functional Stateless Components
const Search = (props) => {
    return (
        <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
            <input 
                className='search-books'
                type='text'
                placeholder='Search by title or author'
                onChange={(event) => props.search(event.target.value)}
            />
            </div>
        </div>
    )
}

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default Search