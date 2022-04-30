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
*/

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
