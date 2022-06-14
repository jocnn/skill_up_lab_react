import axios from "axios"
import { useState, useEffect } from "react"
import { Link, Navigate, useSearchParams } from "react-router-dom"
import { toast } from 'react-toastify';

const Results = () => {

  const [ searchParams ] = useSearchParams()
  const keyboard = searchParams.get('keyboard')

  const [ resultsMovie, setResultsMovie ] = useState([])

  useEffect(() => {
    const consultandoAPI = () => {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=es-ES&page=1&include_adult=false&query=${keyboard}`)
        .then( response => {
          const apiData = response.data.results
          setResultsMovie(apiData)
          if (apiData.length > 0) {
            toast.success(`Obtuviste ${apiData.length} resultados`)
          } else {
            toast.error(`No se encontraron resultados`)
          }
        })
        .catch(error => {
          console.log(error)
          toast.error('Hubo un error, intentalo nuevamente')
        })
    }

    consultandoAPI()
  }, [keyboard])

  const token = sessionStorage.getItem('token')

  return (
    <>
      <h1>Sección de Resultados</h1>

      <h2>Vás a buscar: {keyboard}</h2>

      {
        !token ? <Navigate to={'/'} /> : (
          <div className="row">
            {
              resultsMovie.length === 0 ? 
                <p>No hay resultados</p> :
                resultsMovie.map( movie => 
                  <div className="col-3" key={movie.id}>
                    <div className="card m-2">
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="poster path movie" />
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

export default Results