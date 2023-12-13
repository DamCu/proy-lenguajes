import React from 'react'
import Footer from '../footer/Footer'

const Codigos = () => {
  return (
    <div>
    <h1>Ejemplos sencillos de códigos</h1>
    <p>¿Estás comenzando a aprender programación y buscas ejemplos de código en distintos lenguajes? Hoy te mostraremos algunos que te serán súper útil para tus proyectos de desarrollo. </p>
    <h4>Codigos en Java</h4>
    <p> ¿Sabes qué es Java? Se trata de un lenguaje de programación que permite escribir comandos, instrucciones informáticas y líneas de códigos de manera que pueda entenderse y leerse fácilmente por los seres humanos.  Y, según se menciona en el sitio web de Java, este lenguaje “es rápido, seguro y fiable”.

Java está orientado al desarrollo de un sinfín de aplicaciones: desde sitios webs dinámicos hasta aplicaciones para dispositivos móviles. La realidad es que hay una extensa lista de opciones y herramientas que podemos desarrollar en Java. Es por ello que aprender códigos de Java es importante en el mercado para el desarrollo de nuevos softwares, ya que es uno de los lenguajes de programación más usados hoy en día.  

La mejor manera de aprender a codificar en Java, es a través de ejemplos. Con interiorizar los códigos y comprender el funcionamiento y la utilidad de este lenguaje de programación, podremos explotar al máximo el potencial de nuestros códigos en Java. Recuerda que, como dice el dicho, “la práctica hace al maestro”.</p>

<h5>1. Hello World</h5>
<p>Dentro de todos los programas sencillos de Java, este es el primero que debes aprender. Es el primero de los códigos de Java que casi cualquier programador compila. Acá su código:</p>
<img src="/c1.jpg" class="rounded" height="150"/>
<p>Puntos a tener en cuenta 

  - La definición de la clase (class): se utiliza para definir una nueva clase a través de la palabra clave “class” en los códigos de Java. Debe estar comprendida entre llaves: Apertura “ y cierre ” en los códigos de Java.

  - Método principal (main): cada aplicación de Java debe contener el método, en este caso public static void main (String [ ] args)

  - Public: se coloca para que pueda ejecutarse en cualquier lugar. 

  - Static: con esto el método principal puede ser llamado sin crear el objeto.

  - Void: el método principal no devuelve nada.

  - String: el método principal acepta un único argumento. 
</p>
<br></br>
<h5>2. Área de un círculo</h5>
<p>El siguiente código de Java te será de muchísima utilidad, por lo que te recomendamos prestarle mucha atención.</p>
<img src="/c2.jpg" class="rounded" height="300"/>
<p>Puntos a tener en cuenta

- Para obtener el área de un círculo, debemos definir la fórmula que, como sabemos, consiste en A = r2 π. 

- Además, le asignamos el valor de 22/7 al símbolo griego de “pi”. 

- El “import” es una palabra clave con la cual podemos obtener ciertas características de paquetes incorporados. Acá usamos el paquete “util” que incluye muchas clases. Una de esas clases es “Scanner”, la cual utilizamos para obtener comandos a través de la consola. Recuerda que la consola es la interfaz entre el usuario y el programa. 

- Luego podemos ver la función principal que ya te explicamos detalladamente de “public static void main”. 

- La clase scanner es la encargada de escanear los datos de entrada que el usuario dio a través de la consola. Debemos crear un objeto que sea la referencia para almacenar la variable “s”. (Para obtener acceso a la consola debemos crear un objeto “new scanner”).

- Ahora con System.out.println (“Enter the radius:”); pedimos el valor del radio que el usuario introduce por teclado.

- Utilizamos “nextdouble”, ya que es el formato que necesitamos para que la consola lea el número que le estamos introduciendo. Además, como el número de pi es un número con decimales, es necesario poner “nextdouble” en vez de “nextint” (formato que no acepta decimales, sino solo números enteros).
</p>
<br></br>
<h5>3. Área del triángulo </h5>
<p>Si quieres resolver el área del triángulo con Java, debemos crear una clase, y dentro de esta clase poner un método main. Veamos como quedarían esas líneas de código en Java: </p>
<img src="/c3.jpg" class="rounded" height="400"/>
<p>Puntos a tener en cuenta

- Para el caso del área de un triángulo, podríamos decir que su código en Java es muy similar al del área de un círculo. Tiene un scanner para leer las entradas por consola y utilizamos “nextdouble”, ya que los valores introducidos pueden ser decimales al igual que en el caso anterior. 

- Será suficiente con pedir valores como la altura y la base del triángulo por consola para obtener su área, haciendo uso de la fórmula Atri = (base * altura)/2. 
</p>
<br></br>
<h5>4. Calcular el promedio de “n” números</h5>
<p>Siempre que dispongamos de un valor numérico, debemos introducir una fórmula al código. En este caso, decimos que el promedio de “n” números es: la suma de todos los valores / la cantidad de valores. </p>
<img src="/c4.jpg" class="rounded" height="550"/>
<p>Pasos a tener en cuenta 

Comenzamos asignando un nombre y una clase e iniciamos el algoritmo con “public static void main”.

En este caso, definimos la variable “n” bajo el formato de “int”, ya que los números a trabajar son enteros. 

Posteriormente, en la línea 12 podemos ver cómo asignamos le pedimos al usuario que inserte la cantidad de números a los que le calcularemos el promedio.

Nuestro siguiente paso estará basado en el ciclo “for”, para ir agregando los números.

Finalmente, y una vez hayamos insertado todos los números, nuestro programa se ejecutará y mostrará en pantalla el promedio de los números insertados.
</p>
<br></br>
<h4>Codigos en Python</h4>
<br></br>
<h5>Número par o impar sin usar divisiones ni operador </h5>
<p>Hoy veremos un algoritmo simple pero un poco interesante; se trata de determinar si un número es par o impar pero con algunas restricciones:</p>
<p>
    - No se pueden usar divisiones
    - No se debe usar el operador módulo %

Es decir, no es como estábamos acostumbrados a hacerlo con:

if(numero % 2 == 0) printf("Es par");</p>
<img src="/c5.jpg" class="rounded" height="450"/>




<br></br>
<br></br>
  <Footer/>    
    </div>
  )

}

export default Codigos