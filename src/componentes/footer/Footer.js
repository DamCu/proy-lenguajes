import React from 'react'
import{Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div>
       <footer className='text-white py-4 bg-dark'>
        <div className='container'>
        <nav className='row'>
            <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
            <img src='./fot.jpg' className='mx-12' height='130'></img><br></br>
            </Link>

            <ul className='col-12 col-md-3 list-unstyled'>        
                <li className='text-center'>En esta pagina web encontraras informacion sobre los lenguajes de programacion mas usados</li>
            </ul>

            <ul className='col-12 col-md-3 list-unstyled'> 
            <center><li className='font-weight-bold mb-2'>Enlaces</li></center>
                <li>
                <center><Link to='/Inicio' class='text-reset'>Inicio</Link></center>
                </li>
                <br></br>
                <li>
                <center><Link to='/Creditos' class='text-reset'>Creditos</Link></center>
                </li>
                </ul>
                <ul className='col-12 col-md-3 list-unstyled'> 
                <center><li className='font-weight-bold mb-2'>Siguenos en las redes sociales</li></center>
                <br></br>
                <li className='d-flex justify-content-between'>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-whatsapp"></i>

                </li>
            </ul>
            
            <div className='container'>
             <br></br>
            <br></br>
            <br></br>   
            <center><p>Pagina web realizada por Damaric C.C.Z.</p></center>
            </div>


        </nav>
        </div>   
        </footer> 
    </div>
  )
}

export default Footer