import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

import Movie from "./Movie";

const List = () => {

  const [ moviesList, setMoviesList ] = useState([])
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    const consultandoAPI = () => {
      axios(`https://api.themoviedb.org/3/discover/movie?api_key=ef2fc8163ab84be521bd136dab63ff24&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then( response => {
          const apiData = response.data
          setMoviesList(apiData.results)
        })
        .catch( err => {
          toast.error('Hubo un error, intentalo nuevamente')
        })
    }

    consultandoAPI()
  }, [])

  console.log(moviesList)

  return (
    <>
      {
        !token ? <Navigate to={'/'} /> : (
          <div className="row">
            {
              moviesList.map( movie => {
                return (
                  <Movie 
                    key={movie.id} 
                    movie={movie} />
                )
              })
            }
          </div>
        )
      }
    </>
  )
}

export default List