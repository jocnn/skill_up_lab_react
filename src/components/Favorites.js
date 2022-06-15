import { Link, Navigate } from "react-router-dom"

const Favorites = ({ favorites, addOrRemoveFavorite }) => {

  const token = sessionStorage.getItem('token')

  return (
    <>
      <h1>Favoritos</h1>
      {
        !token ? <Navigate to={'/'} /> : (
          <div className="row">
            {
              !favorites.length ? <p className="clo-12 text-danger">No hay resultados</p> :
                favorites.map( movie => 
                  <div className="col-3" key={movie.id}>
                    <div className="card m-2">
                      <img src={`${movie.img}`} className="card-img-top" alt="poster path movie" />
                      <button 
                        data-movie-id={movie.id}
                        className="favorite-btn"
                        onClick={ addOrRemoveFavorite }
                      >&#x1F496;</button>
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview.substring(0, 20)}</p>
                        <Link to={`/detalle/${movie.id}`} className="btn btn-primary">View Details</Link>
                      </div>
                    </div>
                  </div>
                )
            }
          </div>
        )
      }
    </>
  )
}

export default Favorites