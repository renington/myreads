import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Debounce } from "react-throttle";

// Functional Stateless Components
const Search = (props) => {
    return (
        <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
                <input 
                    className='search-books'
                    type='text'
                    placeholder='Search by title or author'
                    onChange={(event) => props.search(event.target.value)}
                />
            </Debounce>
            </div>
        </div>
    )
}

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default Search