import React from 'react'
import Footer from '../footer/Footer'

const Creditos = () => {
  return (
    <div>
    <div>
    <br></br>
    <h1>Créditos:</h1>
      <br></br>
      <p>Desarrollado por:  Damaris Cris Cuba Zapata</p>
      <p>Fecha: {new Date().toLocaleDateString()}</p>
      <p>Contacto:  76729524</p>

    </div>
    <Footer/> 
    </div>
  )
}

export default Creditos