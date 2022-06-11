import { Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from "./components/Login";
import List from "./components/List";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path='/' >
            <Route index path='/' element={ <Login /> } />
            <Route index path='/listado' element={ <List /> } />
          </Route>

        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
