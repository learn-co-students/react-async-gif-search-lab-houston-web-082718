import React, { Fragment, Component } from 'react'

export default class GifList extends Component {

    render () {
        const { gifs } = this.props
        console.log(gifs)
        return (
            <Fragment>
                {
                    Object.values(gifs).map(gif => {
                        for (let img in gif.images) {
                            if (img === "downsized") {
                                return <img key={gif.id} src={gif.images[img].url}/>
                            }
                        }
                    })

                }
            </Fragment>
        )
    }
}
