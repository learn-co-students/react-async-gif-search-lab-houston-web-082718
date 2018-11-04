import React from 'react'

const GifList = ({ gifs }) => {
    return (
        <ul className="col-sm-8">
            {
                gifs.map(gif => {
                    return <li key={gif.id}><img src={gif.images.original.url} alt="" /></li>
                })
            }
        </ul>
    )
}

export default GifList