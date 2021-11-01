import React from 'react'
import {connect} from "react-redux"

const MovieDetails = (props) => {
    
    <h1>Movie Details</h1>
    console.log(props.selectedMovie)
    if(!props.selectedMovie){
        return (
            <div className="details-container" style={{width : "50%"}}>
                <h2>Movie</h2>
                <div>
                    <h2>Select Movie</h2>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={{width : "50%"}}>
               <h2>Movie</h2>
                    <div>
                        <h2>Selected Movie</h2>
                        <p>title : {props.selectedMovie.title}</p>
                        <p>releaseDate : {props.selectedMovie.releaseDate}</p>
                        <p>rating : {props.selectedMovie.rating}</p>
                    </div> 
            </div>
        )
    }
   
}

const mapStateToProps = (state) => {
    return {
        selectedMovie : state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails)
