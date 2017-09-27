import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes = {
        search: PropTypes.func.isRequired
    }

    render(){
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                <input 
                    className='search-books'
                    type='text'
                    placeholder='Search by title or author'
                    onChange={(event) => this.props.search(event.target.value)}
                />
                </div>
            </div>
        )
    }
}

export default Search