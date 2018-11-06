import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        searchTerm: ""
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.searchTerm)
    }

    onChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange}></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}
