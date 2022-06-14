import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"

const DetailMovie = () => {

  const [ movie, setMovie ] = useState(null)

  const token = sessionStorage.getItem('token')
  const { movieID } = useParams()

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_APIKEY}&language=es-ES`)
      .then( response => {
        const apiData = response.data
        setMovie(apiData)
      })
      .catch(error => {
        console.log(error)
      })

  }, [movieID])

  return (
    <>
      {
        !token ? <Navigate to={'/'} /> : 
        (
          <>
            {
              movie && 
                <>
                  <h1>Titulo: {movie.title}</h1>
                  <div className="row">
                    <div className="col-4">
                      <img
                        className="img-fluid" 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt="backdrop path" />
                    </div>
                    <div className="col-8">
                      <h5>Fecha de Estreno: {movie.release_date}</h5>
                      <h5>Reseña</h5>
                      <p>{movie.overview}</p>
                      <h5>Géneros:</h5>
                      <ul>
                        {
                          movie.genres.map( genre => ( <li key={genre.id}>{genre.name}</li> ))
                        }
                      </ul>
                    </div>
                  </div>                
                </>
            }
          </>
        )
      }
    </>
  )
}

export default DetailMovie