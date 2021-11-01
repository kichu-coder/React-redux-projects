export const selectMovie = (movie) => {
    console.log("action invoked")
    return {
        type : "MOVIE_SELECTED",
        payload : movie 
    }
}