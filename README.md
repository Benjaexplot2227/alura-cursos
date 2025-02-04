# alura-cursos
<h1 align="center"> Challenge Amigo Secreto </h1>

Imagen referencial del proyecto![Captura](https://github.com/user-attachments/assets/73d29a9d-65ec-4421-be99-5a200b5e185d)


<h2>° Este proyecto fue desarrollado por Benjamín González</h2> 
 ° Fecha de finalización del proyecto: 03-02-2025

 <h3>Este proyecto consiste en crear una página web destinada a un juego de amigo secreto, en el cual el usuario agrega los nombres de las personas que van a participar en el juego (puede utilizar el botón de "Agregar amigo" o simplemente el botón "Enter" de su teclado). Luego, la página los enlista en la parte inferior de la barra de registro. Posteriormente, al hacer clic en el botón "Sortear amigo", aparecerá la persona seleccionada dentro del juego.</h3>

 <h2>Funciones dentro del proyecto:</h2>
<h4> 
-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".</h4>
<h4>
-Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.</h4>
<h4>
-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.</h4>
<h4>
-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.</h4>

<h2>Comandos principales que se usaron para el desarrollo de esta página web:</h2>

<h4>let nombresDeAmigos = []</h4>
<h5>Este comando se utilizó para crear la variable nombresDeAmigos, la cual es un "array" que se utiliza para generar una estructura de datos con elementos enlistados.</h5>
<h4>function agregarAmigo()</h4>
<h5>Este comando se usó para crear una función que permitió crear los parámetros que facilitan agregar y mostrar los nombres de los participantes del juego.</h5>
<h4>document.getElementById('amigo')</h4>
<h5>El comando document.getElementById() se utilizó para seleccionar un elemento por su nombre o, en este caso, su "ID" y poder interactuar con el mismo.</h5>
<h4>alert('Introduzca un nombre válido');</h4>
<h5>El comando alert se utilizó para generar una alerta dentro de la página web en caso de que el usuario ingresara un campo vacío, donde debería haberse ingresado un nombre.</h5>
<h4>nombresDeAmigos.push</h4>
<h5>Por último, el comando push() tiene la utilidad de, cuando se ingresa un nombre en la lista, moverlo al final de la lista para continuar agregando más nombres si es necesario.</h5>
