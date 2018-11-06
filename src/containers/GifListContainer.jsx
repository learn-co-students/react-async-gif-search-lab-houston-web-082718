import React, { Component, Fragment } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    state = {
        gifs: {},
        startIndex: 0
    }

    handleSearch = (term) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r=> r.json())
        .then(r=> this.threeGifs(r.data))
    }

    threeGifs = (gifs) => {
        const threeGifs = Object.values(gifs).slice(this.state.startIndex, this.state.startIndex + 3)
        this.setState({ gifs: threeGifs, startIndex: this.state.startIndex + 3})
    }

    render () {
        return (
            <Fragment>
                <GifSearch handleSearch={this.handleSearch}/>
                <br/>
                <GifList gifs={this.state.gifs}/>
            </Fragment>
        )
    }
}
