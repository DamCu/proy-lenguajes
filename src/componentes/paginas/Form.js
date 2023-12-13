import React from 'react'
import Footer from '../footer/Footer'

const Form = () => {
  return (
    <div>
<div class='form'>
<br></br>
<center><h3>Formulario</h3></center>

<h5> ¿Quieres crearte un usuario? </h5> 

<h5> Llena el siguiente formulario: </h5>


<form>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Nombres: </label>
    <input type="name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Apellidos: </label>
    <input type="last name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email: </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Tu Email no será compartido con nadie.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Es correcta?</label>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Introduce un nombre de usuario </label>
    <input type="nombre usuario"/>
    <div id="usuarioHelp" class="form-text">Puede ser un nombre ficticio</div>
  </div>
  <br></br>
  <button type="submit" class="btn btn-primary">Enviar</button>
  
</form>
<br></br>
</div>


<Footer/>
    </div>
  )
}

export default Form