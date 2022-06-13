import { useParams } from "react-router-dom"


const Results = () => {

  const keyboard = useParams()
  console.log(keyboard)

  return (
    <>
      <h1>Sección de Resultados</h1>

      <h2>Vás a buscar: {keyboard}</h2>
    </>
  )
}

export default Results