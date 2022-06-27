//Esto es un comentario de código
/*sdfdsf
dscdsf*/
//ES5
var a;
//ES6
//Declaración de variables
/*let numeroUno;
numeroUno = 1;
let numeroDos = 2;
const PI = 3.141516;
let nombre = prompt("Ingresa tu nombre");
alert("Hola " + nombre);
console.log("Hola " + nombre);
console.log(23 + 54);
let haceFrio = false;
if (haceFrio) {
  console.log("Me pongo el buzo");
} else {
  console.log("No me pongo el buzo");
}
if --si
else if --sino si
else --sino
&& --y/and (Se tienen que cumplir todas las condiciones para que el resultado sea verdadero)
|| --o/or (Devuelve verdadero, cuando al menos una de las condiciones sea verdadera)
= --Asignación (Darle un valor a una variable/constante)
== --Es igual a(Lo usamos para comparar)
=== --Estrictamente igual (Lo usamos para comparar valor y tipo de dato)
!= --Distinto
!== --Estrictamente distinto
// OPERADORES MATEMÁTICOS: 
+ Suma
- Resta
* Multiplicación
/ División
% Módulo (divide 2 números y como resultado, me devuelve el resto)

Iteraciones == Repetir

for (i=0; condición(devuelve un true); actualización){

}

MOSTRAR LOS DÍAS DE LA SEMANA
for (let i=1; i<=7; i++){
  switch (i){
    case 1: console.log("El 1 es lunes");
    break;
    case 2: console.log("El 2 es martes");
    break;
    case 3: console.log("El 3 es miércoles");
    break;
    case 4: console.log("El 4 es jueves");
    break;
    case 5: console.log("El 5 es viernes");
    break;
    case 6: console.log("El 6 es sábado");
    break;
    case 7: console.log("El 7 es domingo");
    break;
    default: console.log("Hubo un error");
  }
}
case 1-es la variable, podría ser caso pepe, y ver si i cumple la función "pepe"

Pedirle al usuario que ingrese un día de la semana e indicarle qué número es:


//Operadores: < ; > ; = ; == ; ===; <= ; >=;
//Operador NOT !

//Operador Lógico: AND &&
// true && true / true && false - ambas tienen que ser verdaderas
// Operador Lógico: OR || true true // false false - con que una de las 2 sea verdadera, el código se ejecuta

let nota = 10;

if (nota < 6) {
  console.log("NO Aprobado");
} else if (nota >= 6 && nota <= 9) {
  console.log("Bien ahi");
} else {
  console.log("Felicidaddes nota maxima");
}

// CICLOS O BUCLES FOR / WHILE

let repetir = true;

while (repetir) {
  //Operaciones
  console.log("Ejecución de While");
  repetir = false;
}

let ingreso = prompt("ingrese un producto");

while (ingreso != "SALIR") {
  console.log("El producto ingresado es " + ingreso);
  ingreso = prompt("Ingresa otro producto");
}

//OPERACION DO WHILE
let contador = 1;

do {
  //Operación
  console.log(contador);
  contador++;
} while (contador <= 5);

//SWITCH
let num = prompt("Ingresa un número");

switch (num) {
  case "1":
    alert("Ingresaste el 1");

    break;
  case "2":
    alert("Ingresaste el 2");

    break;

  default:
    alert("Valor no válido");
    break;
}*/
/* Funciones
function saludar() {
  console.log("Hola alumnos");
}
//Llamar a la función:
saludar();
function saludar() {
  let nombreIngresado = prompt("ingresa tu nombre");
  alert("Hola " + nombreIngresado);
}

//llamar a la función:
saludar();

//Función con parámetros:
let nombre = "Matias";

saludar(nombre, "Chau");

function saludar(nombre, mensaje) {
  console.log(mensaje + " " + nombre);
}
saludar("Abel", "cómo estas?");
saludar("Mariana", "Hola ");

let n1 = parseInt(prompt("ingresa un número"));
let n2 = parseInt(prompt("ingresa un número"));

function sumar(num1, num2) {
  alert("El resultado es " + (num1 + num2));
}
sumar(2, 5);
sumar(10, 12);

sumar(n1, n2);

//No es recomendable poner una funcion dentro de otra. Porque si modifico una, se va a romper

//Scope o alvcance de las variables

let result = 0;

function restar(num1, num2) {
  resultado = num1 - num2;
}

restar(23, 4);

console.log(result);

//funciones anonimas
const suma = function (num1, num2) {
  return num1 + num2;
};

console.log(suma(20, 4));
console.log(suma(86, 90));

//es recomendable declarar las funciones dentro de un const

//funciones flecha

const resta = (num1, num2) => {
  return num1 - num2;
};

console.log(resta(5, 4));
console.log(resta(20, 8));

const IVA = (x) => {
  return x * 1.21;
};
console.log(IVA(23));

//OBJETOS
//literal
const persona1 = {
  nombre: "Dante",
  edad: 24,
  direccion: "Calle falsa 123",
  casado: false,
};
const persona2 = {
  nombre: "Julieta",
  edad: 41,
  direccion: "Calle verdadera 321",
};

console.log(persona1);
//notacion de punto
console.log(persona1.nombre);
console.log(persona2.nombre);
console.log(persona2.casado);
//asignar casado
persona2.casado = true;
console.log(persona2.casado);
persona1.nombre = "Pablo";
console.log(persona1.nombre);
//notacion de corchetes
console.log(persona1["edad"]);

//FUNCION CONSTRUCTORA
function persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;

  this.hablar = () => {
    console.log("Hola soy " + this.nombre);
  };
}

const persona3 = new persona("Pedro", 71, "por alla");

console.log(persona3.nombre);
console.log(persona3);

persona1.hablar();
// OBJETO MATH

const PI = Math.PI;

console.log(PI);
console.log(Math);

//Raiz cuadrada
console.log(Math.sqrt(25));

//Flor- no tiene en cuenta el decimal
console.log(Math.floor(3.6));

//Round-redondea
console.log(Math.round(3.7));

//toFixed- seleccionas los decimales que querés que se muestren
console.log(PI.toFixed(4));

//Random- muestra un número aleatorio entre 0 y 1
console.log(Math.random() * 100);

//Math random + math floor

console.log(Math.floor(Math.random() * 100));

//DOM- Document Object Model

console.dir(document.body);

const h2 = document.getElementsByTagName("h2"); //Toma todos los h2 del documento, lo tira tipo array
[1];
console.log(h2);

//Se puede acceder a las clases también, como colección de las clases ya que se puede repetir
const titulo = document.getElementsByClassName("titulo");
console.log(titulo);

//Se puede también acceder por id

const titulo_dos = document.getElementById("titulo_dos");
console.log(titulo_dos);

console.log(titulo_dos.innerHTML);
console.log(titulo_dos.innerText);

// InnerHtml permite crear estrucutra variable y guardarla dentro del html

const divContenedor = document.getElementById("contenedor");

divContenedor.innerHTML = "<p>Esto es texto dinámico</p>";

//La propiedad className te permite aplicarle class de tu css

divContenedor.className = "green";

// Create elements
let parrafo = document.createElement("p");
parrafo.innerHTML = "Texto de <strong>prueba</strong>";
document.body.append(parrafo);

// A partir de ahora los imput van x imput, NO POR PROMPT

const inputNombre = document.getElementById("nombre");

divContenedor.innerText = inputNombre.value;
console.log(divContenedor);

// EVENTOS
//Opción 1
const btnEnviar = document.querySelector(`#enviar`);
btnEnviar.addEventListener("click", () => {
  divContenedor.innerText = inputNombre.value;
});

//Opción 2
btnEnviar.onclick = () => {
  divContenedor.innerText = inputNombre.value;
};

inputNombre.onkeyup = () => {
  divContenedor.innerText = inputNombre.value;
};
*/

function asignarOperacion(op) {
  if (op == "sumar") {
    return (a, b) => a + b;
  } else if (op == "restar") {
    return (a, b) => a - b;
  }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma(4, 6));
console.log(resta(5, 3));
console.log(suma(12, 40));

const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
  console.log(num);
});

const miCompra = [
  { nombre: "Desarrollo Web", precio: 20000 },
  { nombre: "Javascript", precio: 18750 },
  { nombre: "ReactJS", precio: 27500 },
];

const total = miCompra.reduce(
  (precioAcumulado, elemento) => precioAcumulado + elemento.precio,
  0
);
console.log(total);

const nombre = localStorage.setItem("nombre", "Manuel");

const valorNombre = localStorage.getItem("nombre");

for (let i = 0; i > 10; i++) {}
let num = 10;
num = num + 1;
//Sugar Syntax
num += 1;
num++;
// Operador ternario ? simplifica el if...else    ofrece un return por defecto
// Condición ? caso1 : caso2

let temperatura = 31;
if (temperatura > 30) {
  alert("Día caluroso");
} else {
  alert("Día agradable");
}

//Sugar Syntax
temperatura > 30 ? alert("Día caluroso") : alert("Día agradable");

//Operador && para reducir un if sencillo también - Hace una devolución si la condición es verdadera. Si no, no devuleve nada.

//Operador lógico or ||

//Operador Nulish Coal   ??   ... - Funciona como el or pero admite más de un valor verdadero. Permite acceder a los objetos y no permitir que nos devulva un error en la ejecución. Se debe agregar el ? a objeto que se desea hacer la comparación por ej:
// console.log (producto1?.nombre || "El usuario no existe");

//Destructuración permite utilizar variables contenidas dentro de un objeto, por ejemplo   let {prop1, prop2} = objeto   - declaro las variables que quiero, que pertenecen al objeto

//Spread - te permite comvertir el contenido de un array en un string  -  Se puede concatenar arrays y/o aobjetos - Se puede copiar un objeto y cambiarle alguna de las variables.
//Spred también se puede pasar como parámetro rest

function sumar(...numeros) {
  console.log(/*hacer un for o algo para que tome la cantidad exacta de arámetros*/);
}

sumar(4, 6, 98, 242);

//Podría usarse el spreed operator para sumar los precios del carrito por ejemplo
//Existen distintas librerías Java Script - si instalamos con CDN, se debe poner el script antes de nuestros propios scripts
//Ver Sweetalert y Toastify (para producto cargado al carrito)
//Luxon es una librería que permite trabajar con fechas
// Cleave js permite dar formato por ejemplo a los números de la tarjeta de crédito

// Clase 8 - Modelos de Programación sincrónica y asincrónica
// Settimeout - es una función que nos permite realizar acciones asincrónicamente. Recibe 2 parámetros, un callback y un valor numérico.
setTimeout(() => {
  console.log("Proceso asincrónico");
}, 3000);
const btn = document.querySelector("#boton");
const popup = document.querySelector("#popup-mensaje");

btn.addEventListener("click", () => {
  popup.classList.add("popup-active");

  setTimeout(() => {
    popup.classList.remove("popup-active");
  }, 2500);
});

// Call stack (Pila) - Es una lista de tareas donde se van acumulando las tareas que nosotros le pedimos a Js, que haga.
// Event Loop - Muchas funciones asincrónicas se ejecutan en un stack diferente. El Event Loop es la herramienta que permite la sincronización entre nuestro call stack con estas tareas asincrónicas que funcionan en un thread aparte. Si el stack está vacío, el Event Loop envía la primera función que esté en la callback queue al call stack y comienza a ejecutarse
// Set Interal - similar a SetTimeout, pero nos permite repetir una ejecución cada determinada cantidad de tiempo, por ej imprimir un log cada 1 seg.
setInterval(() => {
  console.log("Tic");
}, 1000);
// Se repite indefinidamente a menos que lo paremos.
// Clearinterval y Cleartimeout, para removerlos

let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(contador);
  if (contador >= 20) {
    clearInterval(intervalo);
  }
}, 1000 /*podría ser una variable o un dato que ingrese el usuario o cualquier cosa*/);

// PROMESAS - Es un objeto que representa un evento futuro. Una promesa cuenta con 3 estados posibles. Pending / Fulfilled / Rejected. Las promesas pueden ser resultas o rechazadas.
// new Promise recibe una función como parámetro, que a su vez revise por parámetro resolve y reject.
new Promise((resolve, reject) => {
  //cuerpo de la promesa
});

const eventoFuturo = () => {
  return new Promise((resolve, reject /*resolve y reject son funciones*/) => {
    //código a ejecutar
    console.log("Hola tarola");
  });
};
console.log(eventoFuturo());

/*El valor de retorno de la promesa se define a través del llamado a las funciones de resolve o reject:
Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su estado a fulfilled, con el valor enviado a resolve().
Si la promesa llama a reject(), cambiará su estado a rejected con el valor enviado al reject().
*/
const eventoFuturo2 = (res) => {
  return new Promise((resolve, reject) => {
    if (res === true) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  });
};

console.log(eventoFuturo(true)); // Promise { 'Promesa resuelta' }
console.log(eventoFuturo(false)); // Promise { <rejected> 'Promesa rechazada' }

const eventoFuturo3 = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada");
    }, 2000);
  });
};

console.log(eventoFuturo(true)); // Promise { <pending> }
console.log(eventoFuturo(false)); // Promise { <pending> }

// Hay 2 métodos más para trabajar con las promesas que son Then y Catch
/*Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(), los cuales reciben una función por parámetro con la cual se captura el valor de la promesa:
.then() : Si la promesa es resuelta ✅, su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.
.catch() : si la promesa es rechazada ❌, su valor se captura dentro de un .catch() siguiendo la misma lógica.*/

//Lo que queramos ejecutar cuando la promesa se resuelva o rechace, debemos definirlo dentro de un .then() o .catch(), según el caso 🙌:
eventoFuturo(true).then((response) => {
  console.log(response); // Promesa resuelta
});

eventoFuturo(false).catch((error) => {
  console.log(error); // Promesa rechazada
});
// Se puede anidar
console.log(
  eventoFuturo()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error); // Promesa rechazada
    })
);

// Finally - finally() es un método que recibe una función la cual se ejecutará siempre al finalizar la secuencia, sin importar si se haya resuelto o no la promesa
// Se ejecuta aún si la respuesta es exitosa o rechazada. También se lo puede anidar o concatenar.
eventoFuturo(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fin del proceso");
  });
// Promesa resuelta
// Fin del proceso

// Ajax - AJAX (JavaScript Asíncrono y XML), un conjunto de técnicas de desarrollo que permiten que las aplicaciones web funcionen de forma asincrónica para procesar tareas en segundo plano
/*Javascript nos ofrece el método fetch() para hacer peticiones HTTP a algún servicio externo. Como estas peticiones son asincrónicas, convenientemente el método fetch() trabaja con promesas.
El método recibe un primer parámetro que es la URL a la cual hacer la petición, y un segundo parámetro opcional de configuración:*/
console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
// Promise {<pending>}
//Retorna una Promesa pendiente. Para trabajar con la resolución de la petición, debemos hacerlo dentro del .then() correspondiente:
fetch("https://jsonplaceholder.typicode.com/posts").then((resp) =>
  console.log(resp)
);

// Hay que crear un archivo json, se puede crear en la carpeta Js. Puede ser data.json
// En los json las llaves y los valores van todos con "", a menos que sea número.
// Le pasamos al fetch la ruta de nuestro archivo json. Es una ruta relativa a mi proyecto.
// Podría tener el array de productos en un archivo json y traerlo con un fetch.

// Async y await - La sentencia await nos permite establecer un punto de espera en el código. Aplicado como prefijo a una promesa (en este caso, el return del fetch) se bloquea la ejecución de la siguiente instrucción hasta que la promesa se resuelva
// Pero await sólo puede utilizarse dentro de una función asincrónica 😕. Aquí es donde entra la sentencia async. Ésta palabra reservada sirve para declarar una función como asincrónica, y se agrega como prefijo a la función
// Al usar el await, tal vez ya no sea necesario poner el .then
// Ver clip js
// Tiene que haber un fetch aunque sea consumiendo un json interno

// Poner propiedad amount y también total price

// Debería pasarle un precio para cada tamaño seleccionado

// Para empezar React, repasar objetos, arrays, iteradores para recorrerlos(ver map, filter), fetch y apis externas, spread operator, destructury
// El simulador debe terminar el proceso, no solo sumar al carrito de compras, sino también finalizar "simular" la compra
