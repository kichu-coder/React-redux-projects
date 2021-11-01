import {createStore , combineReducers} from "redux"


const movieReducer = () => {
    return [
        {title : "spiderMan : HomeComing" , relaseDate : "2020-19-11" , rating : 7.4},
        {title : "spiderman : No way Home" , releaseDate : "2020-11-2" , rating : 8.9},
        {title : "spiderMan : with iron man" , relaseDate : "2020-19-11" , rating : 7.4},
        {title : "avengers :  civil war" , releaseDate : "2020-11-2" , rating : 8.9},
        {title : "avengers : age of ultron" , releaseDate : "2020-19-11" , rating : 7.4},
        {title : "avengers : the beginning" , releaseDate : "2020-11-2" , rating : 8.9},
    ]
}

const selectedMovieReducer = (state = null , action) => {
    console.log("hello")
    if(action.type === "MOVIE_SELECTED"){
        return action.payload
    }
    return state;
}

export default createStore(combineReducers({movies : movieReducer , selectedMovie : selectedMovieReducer}))