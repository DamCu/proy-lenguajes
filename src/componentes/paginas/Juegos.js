import React from 'react'
import Footer from '../footer/Footer'

const Juegos = () => {
  return (
    <div>
<br></br>
<center><h3>Lenguajes de Programacion para videojuegos</h3></center>

<h5>¿Qué lenguaje de programación usar?</h5>
<p>
Dependiendo del tipo de videojuego que quieras desarrollar, existen diferentes lenguajes de programación. En función del grado de interactividad y el dispositivo que se vaya a utilizar para jugar y la rapidez de respuesta que queramos conseguir, deberemos elegir uno u otro. Además, podemos emplear varios lenguajes si el grado de complejidad del diseño es alto, para que todas las capas del juego funcionen correctamente. A continuación os explicamos algunos de los lenguajes de programación de videojuegos más usados, para diferentes niveles y usos.
</p>
<center><img src="/ju.jpg" class="rounded" height="450"/></center>
<br></br>
<br></br>

<div class='Lengs'>
  <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div class="card-body">
        <img src="/a.jpg" class="rounded" height="150"/>
          <h5 className="card-title">C++</h5>
          <p className="card-text">Este lenguaje de programación es uno de los más utilizados en el sector por profesionales. Es un lenguaje popular en los títulos AAA, se utiliza en videojuegos para PlayStation y Xbox, y en juegos independientes. Se trata del lenguaje más compatible con la mayoría de los motores de juego y tiene un tiempo de ejecución bastante rápido. Por otro lado, permite a los desarrolladores tener un control amplio sobre el hardware, la gestión de la memoria y los gráficos, y, aunque al principio puede resultar complejo de utilizar, una vez te haces a él, podrás manejar cualquier otro lenguaje. </p>
          <a href="https://www.programarya.com/Cursos/C++" class="btn btn-primary">Saber más</a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
        <img src="/b.jpg" class="rounded" height="150"/>
          <h5 className="card-title">C Sharp</h5>
          <p className="card-text">C# es un lenguaje de programación muy popular, sobre todo en entornos Windows. Es un poco menos flexible y compatible que C++, pero algunos motores como Unity permiten programar con él y no está limitado a un determinado sistema operativo o plataforma; se pueden crear juegos para iOS, Android, Windows Play Station y Xbox. Es un lenguaje más fácil de aprender que el C++ y será una buena opción si estás empezando o si quieres que lo disfruten más personas, con independencia del dispositivo. </p>
          <a href="https://www.tutorialesprogramacionya.com/csharpya/" class="btn btn-primary">Saber más</a>
        </div>
      </div>
    </div>
  </div>


  <br></br>
  <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div class="card-body">
        <img src="/j.jpg" class="rounded" height="150"/>
          <h5 className="card-title">Java</h5>
          <p className="card-text">Se trata de un lenguaje frecuentemente utilizado y presenta muchas similitudes con C++. Su principal característica es la versatilidad, ya que  se puede utilizar en todas las plataformas, dispone de gran cantidad de frameworks para el desarrollo 3D, ofrece módulos de código abierto y su modelo se puede actualizar constantemente. ¿El problema? Que se ejecuta dentro de su máquina virtual, y esto supone una pérdida de rendimiento.</p>
          <a href="https://codigofacilito.com/cursos/JAVA" class="btn btn-primary">Saber más</a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
        <img src="/d.jpg" class="rounded" height="150"/>
          <h5 className="card-title">Java Script</h5>
          <p className="card-text">Este es uno de los lenguajes más utilizados en el desarrollo de videojuegos web y de navegador. La mayoría de motores de videojuegos son compatibles con JavaScript, y cuenta con múltiples frameworks para 3D y una gran variedad de bibliotecas. Además, algunos motores de videojuegos como Unity lo utilizan, por lo que podremos usarlo para crear todo tipo de scripts dentro del juego.  </p>
          <a href="https://aprendejavascript.org/" class="btn btn-primary">Saber más</a>
        </div>
      </div>
    </div>
  </div>

  <br></br>
  <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div class="card-body">
        <img src="/e.jpg" class="rounded" height="150"/>
          <h5 className="card-title">Python</h5>
          <p className="card-text">A pesar de no ser un lenguaje de programación exclusivo para la creación de videojuegos, Python es un lenguaje muy flexible y potente para esto. Su ejecución es mucho más simple que la de otros lenguajes (permite plasmar ideas complejas con pocas líneas de código), y su framework Pygame permite a los desarrolladores crear prototipos de sus videojuegos de manera rápida y sencilla, y funciona prácticamente en todas las plataformas y sistemas operativos.   </p>
          <a href="https://aprendepython.es/" class="btn btn-primary">Saber más</a>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
        <img src="/l.jpg" class="rounded" height="150"/>
          <h5 className="card-title">Lua</h5>
          <p className="card-text">Finalmente, Lua es un lenguaje de programación sencillo, rápido y fácil de aprender. Compatible con lenguajes más complejos y de rápida ejecución, también se usa para aplicaciones web y procesamiento de imágenes. Este lenguaje es especialmente útil para proyectos independientes y programadores que estén empezando en la profesión. </p>
          <a href="https://formacion.tutellus.com/tecnologia/desarrollo-app/aprende-programacion-basica-con-lua-35826" class="btn btn-primary">Saber más</a>
        </div>
      </div>
    </div>
  </div>
  <br></br>
</div>

<center>
<iframe width="843" height="315" src="https://www.youtube.com/embed/-LeduxSf2_M" title="Lenguajes de programación para videojuegos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>
<br></br>
<br></br>

<h5>Conclusión</h5>
<p>Existen multitud de lenguajes de programación para videojuegos, no solo los que hemos comentado aquí, también muchos otros, algunos de ellos específicos para cada plataforma o sistema operativo (Swift, Objective-C), que cuentan con excelentes funcionalidades. Por eso nosotros te recomendamos que elijas el lenguaje que se ajuste mejor al tipo de proyecto que quieras crear, en combinación con tus preferencias y experiencia como programador. 

¿Conocías estos lenguajes? ¿Cuáles usas tú? Si tienes algún comentario que aportar, estaremos encantados de escucharlo. Comparte este artículo o coméntanos en redes sociales. Entre todos creamos conocimiento.</p>

<br></br>
<br></br>
<Footer/>
    </div>
  )
}

export default Juegos