import React from 'react'
import {connect} from "react-redux"
import { selectMovie } from '../actions'

const MovieList = (props) => {

    const listItems = props.movies.map(movie => (
        <div key={movie.title}>
            <h4>{movie.title}</h4>
            <button onClick={() => props.selectMovie(movie)} type="button">Select Movie</button>
        </div>
    ))
    return (
        <div className="list-container" style={{width : "40%"}}>
            <h2>Movie List</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies : state.movies
    }
}

const mapDispatchToProps =  {
    // return{
        selectMovie : selectMovie
    // }   
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
