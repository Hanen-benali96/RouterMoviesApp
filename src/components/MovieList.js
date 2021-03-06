import React from "react"
import MovieCard from "./MovieCard"

let MoviesList = ({ moviesList, titleSearch, rating }) => {

    const movies = moviesList
        .filter((el) => {
            return el.title.toLowerCase().includes(titleSearch.toLowerCase().trim()) && el.rate >= rating
        })


    return (
        <div className="movieslist"style={{ display :'flex', flexWrap :'wrap', justifyContent : "space-between"}}>
            {

                movies.map((movie, i) => <MovieCard movie={movie} key={i} />)
            }

        </div>
    )
}
export default MoviesList