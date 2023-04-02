import { useState } from "react"
import Movie from "./Movie"
import RentedMovies from "./RentedMovies"
function Catalog(props) {
    const moviesData = props.moviesData
    const setMoviesData = props.moviesDataStateFunction
    const [text, setText] = useState("")
    const [budget, setBudget] = useState(10)

    const updateText = event => {
        setText(event.target.value)
    }

    const updateMovieToRent = function (id) {
        if (budget <= 0) {
            return
        }
        setBudget(budget - 5)
        const newMovies = [...moviesData]
        const movieIndex = newMovies.findIndex(m => m.id == id)
        newMovies[movieIndex].isRented = true
        setMoviesData(newMovies)
    }

    const unRentMovie = function (id) {
        setBudget(budget + 5)
        const newMovies = [...moviesData]
        const movieIndex = newMovies.findIndex(m => m.id == id)
        newMovies[movieIndex].isRented = false
        setMoviesData(newMovies)
    }
    const goToMovieDescription = function (id) {
        return `/movie/${id}`
    }
    const notRented = moviesData.filter(m => m.isRented == false);
    const toCatalog = notRented.filter(m => {
        if (text == '') {
            return notRented
        }
        if (text.toLowerCase() == m.title.slice(0, text.length).toLowerCase()) {
            return m
        }

    })
    const toRented = moviesData.filter(m => m.isRented == true);
    return (
        <div id="catalog">
            <h2 style={{display: "inline"}}>Search: </h2>
            <div id="input" style={{display: "inline"}} >
                <input type="text" value={text} onChange={updateText} />
            </div>
            <RentedMovies movies={toRented} unRentFunc={unRentMovie}/>
            <h2>Catalog:</h2>
            <div className="movies">
                {toCatalog.map(m => <Movie movieInfo={{ id: m.id, img: m.img }} movieFunc={goToMovieDescription} rentFunction={updateMovieToRent} />)}
            </div>
            <div>
                <h3>budget:</h3>
                <span>{budget}</span>
            </div>
        </div>
    )
}
export default Catalog;