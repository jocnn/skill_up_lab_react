import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const List = () => {

  const [ moviesList, setMoviesList ] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    const consultandoAPI = () => {
      axios(`https://api.themoviedb.org/3/discover/movie?api_key=ef2fc8163ab84be521bd136dab63ff24&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then( response => {
          const apiData = response.data
          setMoviesList(apiData.results)
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
            <div className="col-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default List