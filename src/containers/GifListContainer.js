import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            search: 'dog',
            gifs: []
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState({search: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => this.setState({gifs: json.data.slice(0, 3)}))
    }

    render() {
        return (
            <div className="container">
                <GifList gifs={this.state.gifs} />
                <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default GifListContainer