/*Sumar de 3 en 3 - se me hace bucle infinito, no entiendo por qué
let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingresar otro número"));
let resultado = n1 + n2;
while (n1 != "ESC") {
  console.log(resultado);
  n1 = prompt("Ingresar otro número");
}
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 100; i = i + 3) {
  let resultado = ingresarNumero + i;
  alert(ingresarNumero + " + " + i + " = " + resultado);
}
*/

function ProductoPizza(saborPizza, tamañoPizza) {
  this.saborPizza = saborPizza;
  this.tamañoPizza = tamañoPizza;
}
function ProductoPapas(tamañoPapas) {
  this.tamañoPapas = tamañoPapas;
}
function ProductoBirra(colorBirra) {
  this.colorBirra = colorBirra;
}
const Pedido = [];
function crearPedido() {
  let saborPizza = prompt("qué sabor de Pizza querés");
  let tamañoPizza = prompt("qué tamaño de Pizza querés");
  let productoNuevo1 = new ProductoPizza(saborPizza, tamañoPizza);
  Pedido.push(productoNuevo1);
  let tamañoPapas = prompt("qué tamaño de Papas querés");
  let productoNuevo2 = new ProductoPapas(tamañoPapas);
  Pedido.push(productoNuevo2);
  let colorBirra = prompt("Qué color de Birra querés");
  let productoNuevo3 = new ProductoBirra(colorBirra);
  Pedido.push(productoNuevo3);
}
crearPedido();
console.log(Pedido);
alert(Pedido);
