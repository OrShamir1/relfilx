import { useParams } from "react-router-dom";

function MovieDescription (props) {
    const {movieID} = useParams();
    const moviesData = props.moviesData
    const findMovieDataById = moviesData.find(m => m.id == movieID);
    console.log(findMovieDataById);

    return (
        <div>
        <div>{findMovieDataById.title}</div>
        <div>{findMovieDataById.year}</div>
        <img src={findMovieDataById.img} style={{height: "200px", width: "200px"}}/>
        <p>{findMovieDataById.descrShort}</p>
        </div>
    )
}
export default MovieDescription;