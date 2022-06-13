import { useState } from 'react';
import { toast } from 'react-toastify';


const Search = () => {

  const [ search, setSearch ] = useState('')

  const handleChangeSearch = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  
    if (search.trim().length === 0) {
      toast.warning('Debe ingresar una palabra para iniciar la busqueda')
      return
    } else if (search.length < 4) {
      toast.warning('Debe ingresar mas de 3 caracteres')
      return
    }


    console.log(search)
    console.log('Iniciando busqueda...')
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="d-flex align-items-center"
    >
      <label className="form-label mb-0">
        <input 
          className="form-control" 
          type="text" 
          name="keyboard"
          value={search}
          onChange={ e => handleChangeSearch(e) }
        />
      </label>
      <button className="btn btn-success m-2" type="submit">Buscar</button>
    </form>
  )
}

export default Search