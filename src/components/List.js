import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  
  const navigate = useNavigate()
  
  useEffect(() => {
    const verificarToken = () => {
      const token = localStorage.getItem('token')
      if (token === null) {
        navigate('/')
      }
    }
    verificarToken()
  }, [navigate])
    

  return (
    <>
      <h1>List</h1>
    </>
  )
}

export default List