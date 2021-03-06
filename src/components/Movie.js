import { Link, Navigate } from "react-router-dom"

const Movie = ({ movie, addOrRemoveFavorite }) => {
  
  const token = sessionStorage.getItem('token')

  return (
    <>
    {
      !token ? <Navigate to={'/'} /> : 
      (
        <div className="col-3">
          <div className="card m-2">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="poster path movie" />
            <button 
              data-movie-id={movie.id}
              className="favorite-btn"
              onClick={ addOrRemoveFavorite }
            >&#x1F5A4;</button>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview.substring(0, 100)}</p>
              <Link to={`/detalle/${movie.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Movie