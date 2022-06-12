import { Link } from "react-router-dom"

const Movie = ({ movie }) => {
  
  return (
    <>
      <div className="col-3">
        <div className="card m-2">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="poster path movie" />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview.substring(0, 100)}</p>
            <Link to={`/detalle?id=${movie.id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie