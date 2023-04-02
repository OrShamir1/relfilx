function RentedMovies (props) {
    const movies = props.movies
    const unRentMovie = props.unRentFunc
    return (
        <div>
            <h2>Rented:</h2>
            <div className="movies">
            {movies.map(m => <div className="movie">
                <img src={m.img} style={{height: "200px", width: "200px"}}/>
                <button onClick={() => unRentMovie(m.id)}>unRent</button>
                </div>)}
            </div>
        </div>
    )
}

export default RentedMovies;