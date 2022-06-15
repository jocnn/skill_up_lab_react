import { Link } from "react-router-dom"
import Search from "./Search"

const Header = ({ favorites }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">AlkeFlix</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado">Listado</Link>
              </li>
              <li className="nav-item  d-flex align-items-center">
                <Link className="nav-link" to="/favoritos">
                  Favoritos 
                  <span className="text-success"> °{favorites.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Search />
      </nav>
    </header>
  )
}

export default Header