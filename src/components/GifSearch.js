import React from 'react'

const GifSearch = ({ handleChange, handleSubmit }) => {
    return (
        <form className="col-sm-4" onSubmit={handleSubmit}>
            <label>Enter a Search Term:</label><br/>
            <input className="form-control" type="text" onChange={handleChange}/>
            <button className="btn btn-success">Find Gifs</button>
        </form>
    )
}

export default GifSearch