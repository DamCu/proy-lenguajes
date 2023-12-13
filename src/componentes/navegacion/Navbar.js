import React from 'react'
import{Link} from 'react-router-dom'


const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to='/'>
        <img src='./img3.jpg'width='280'></img>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link " to='/'>Inicio</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='Lenguajes'>Lenguajes de Programacion</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link" to='Juegos'>Programar juegos</Link>
                    </li>

                     <li className="nav-item">
                        <Link className="nav-link" to='Tutoriales'>Tutoriales</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='Segunda'>Proyectos</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='Codigos'>Codigos</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='Form'>Formulario</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='Items'>Creadores</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='Bibliotecas'>Bibliotecas</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to='Creditos'>Creditos</Link>
                    </li>

                </ul>
        </div>
    </div>
  </nav>
  </div>
  )
}

export default navbar