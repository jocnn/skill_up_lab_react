import { Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "./components/Layout";
import Login from "./components/Login";
import List from "./components/List";
import Contact from "./components/Contact";
import DetailMovie from "./components/DetailMovie";

function App() {
  return (
    <Layout>
      <Routes>
        <Route>
          <Route path='/' >
            <Route index path='/' element={ <Login /> } />
            <Route path='/listado' element={ <List /> } />
            <Route path='/contacto' element={ <Contact /> } />
            <Route path='/detalle/:movieID' element={ <DetailMovie /> } />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
