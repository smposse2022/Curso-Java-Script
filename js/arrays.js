//ARRAYS
//Vacio
/*
const numeros = [1, 2, 76, 40];
console.log(numeros);
console.log(numeros[0]);

for (let i = 0; i < 10; i++) {
  console.log(numeros[i]);
}

//Push es un método para agregar elementos a un array

numeros.push(27);
for (let i = 0; i < 10; i++) {
  console.log(numeros[i]);
}

//Eliminar un elemento es pop- elimina el último elemento agregado -- nombredelarray.pop
//Eliminar un elemento es shift- elimina el último elemento agregado
//Eliminar un elemento es splice- elimina elementos, a partid de 2 parametros. Desde qué posición arranca, y cuántos elementos eliminará
//Método join - Se le pone entre comillas el separador, por ej ", "
//Método concat permite unir 2 arrays. Dentro de un array.conccat, le paso como parámetro entre () el otro array, ej: const mascotas = perros.concaat (gatos);
//Método indexof nos permite obtener el índice donde está ubicado determinado elemento - o sea, nos da la posición del elemento, cuando pasamos el elemento como parámetro, ej: nombres.indexof ("Ana");
//Método includes, devuelve en true o false, si está incluido o no dentro del array, ej: nombres.include ("Miguel");
//Método reverse, da vuelta el array. Modifica el array original
//Podemos guardar objetos dentro de un array

//Objeto
const objeto = {
  nombre: "Arroz",
  precio: 23,
};
const objeto2 = {
  nombre: "Papas",
  precio: 40,
};
//Array
const productos = [objeto, objeto2];
console.log(productos);
function Producto(nombre, precio, id) {
  this.nombre = nombre;
  this.precio = precio;
  this.id = id;
}
*/

//Ejercicio en clase:
function Producto(nombre, precio, id) {
  this.nombre = nombre;
  this.precio = precio;
  this.id = id;
}

const productos = [];
/* let producto1 = new Producto("Remera", 200, 2); console.log(producto1.nombre); */ function crearProducto() {
  let cantidadProducto = prompt("Cuantos productos a agregar");
  for (let index = 0; index < cantidadProducto; index++) {
    let nombre = prompt("ingrese nombre");
    let precio = prompt("ingrese precio");
    let id = prompt("ingrese id ");
    let productoNuevo = new Producto(nombre, precio, id);
    productos.push(productoNuevo);
  }
}
crearProducto();
console.log(productos);
