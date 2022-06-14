import { Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "./components/Layout";
import Login from "./components/Login";
import List from "./components/List";
import Contact from "./components/Contact";
import DetailMovie from "./components/DetailMovie";
import Results from "./components/Results";

import './styles/App.css'

function App() {

  const addOrRemoveFavorite = e => {

    let tempCopyLocal = JSON.parse(localStorage.getItem('fav_movies')) || []
    //console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ tempCopyLocal", tempCopyLocal)

    let btn = e.currentTarget
    let parent = btn.parentElement
    let img = parent.querySelector('img').getAttribute('src')
    let title = parent.querySelector('h5').innerText
    let overview = parent.querySelector('p').innerText

    let myMovie = {
      id: btn.dataset.movieId,
      img,
      title, 
      overview, 
    }
    //console.log("🚀 ~ file: App.js ~ line 28 ~ addOrRemoveFavorite ~ myMovie", myMovie)

    let findMovie = tempCopyLocal.find( temp => temp.id === myMovie.id)

    if (!findMovie) {
      tempCopyLocal.push(myMovie)
      localStorage.setItem('fav_movies', JSON.stringify(tempCopyLocal))
    } else {
      let tempMovie = tempCopyLocal.filter( oneMovie => oneMovie.id !== myMovie.id)
      localStorage.setItem('fav_movies', JSON.stringify(tempMovie))
      tempMovie = null
    }
    findMovie = null
    tempCopyLocal = null
  }

  return (
    <Layout>
      <Routes>
        <Route>
          <Route path='/' >
            <Route index path='/' element={ <Login /> } />
            <Route path='/listado' element={ <List addOrRemoveFavorite={addOrRemoveFavorite} /> } />
            <Route path='/contacto' element={ <Contact /> } />
            <Route path='/resultados' element={ <Results /> } />
            <Route path='/detalle/:movieID' element={ <DetailMovie /> } />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
