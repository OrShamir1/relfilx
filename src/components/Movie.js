import { Link } from "react-router-dom";

function Movie(props) {
    const movieId = props.movieInfo.id;
    const movieImg = props.movieInfo.img;
    const movieFunc = props.movieFunc;
    const rentFunction = props.rentFunction
    return (
        <div className="movie">
        <Link to={movieFunc(movieId)}>
            <img src={movieImg} style={{height: "200px", width: "200px"}}/>
        </Link>
        <button id={movieId} onClick={() => rentFunction(movieId)}>Rent</button>
        </div>
    )
}
export default Movie;