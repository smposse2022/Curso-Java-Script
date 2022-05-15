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
const saludar = () => {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  while (!nombre || !apellido) {
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
  }
  return nombre + " " + apellido;
};

let nombreUsuario = saludar();
alert("Hola " + nombreUsuario);

class Pedido {
  constructor(saborPizza, tamañoPizza, tamañoPapas, colorBirra) {
    this.saborPizza = saborPizza;
    this.tamañoPizza = tamañoPizza;
    this.tamañoPapas = tamañoPapas;
    this.colorBirra = colorBirra;
  }
}
const Carrito = [];

const crearPedido = () => {
  let saborPizza = prompt(
    "Qué sabor de Pizza querés:\n 1) Muzarella\n 2) Fugazeta\n 3) Roquefort"
  );
  while (
    saborPizza !== "Muzarella" &&
    saborPizza !== "Fugazeta" &&
    saborPizza !== "Roquefort"
  ) {
    saborPizza = prompt(
      "Qué sabor de Pizza querés:\n 1) Muzzarella\n 2) Fugazeta\n 3) Roquefort"
    );
  }
  let tamañoPizza = prompt(
    "Qué tamaño de Pizza querés:\n 1) Grande\n 2) Mediana\n 3) Chica"
  );
  while (
    tamañoPizza !== "Grande" &&
    tamañoPizza !== "Mediana" &&
    tamañoPizza !== "Chica"
  ) {
    tamañoPizza = prompt(
      "Qué tamaño de Pizza querés:\n 1) Grande\n 2) Mediana\n 3) Chica"
    );
  }
  let tamañoPapas = prompt(
    "Qué tamaño de Papas querés:\n 1) Grandes\n 2) Medianas\n 3) Chicas"
  );
  while (
    tamañoPapas !== "Grandes" &&
    tamañoPapas !== "Medianas" &&
    tamañoPapas !== "Chicas"
  ) {
    tamañoPapas = prompt(
      "Qué tamaño de Papas querés:\n 1) Grandes\n 2) Medianas\n 3) Chicas"
    );
  }
  let colorBirra = prompt(
    "Qué color de birra querés:\n 1) Rubia\n 2) Negra\n 3) Roja"
  );
  while (
    colorBirra !== "Rubia" &&
    colorBirra !== "Negra" &&
    colorBirra !== "Roja"
  ) {
    colorBirra = prompt(
      "Qué color de birra querés:\n 1) Rubia\n 2) Negra\n 3) Roja"
    );
  }
  let pedidoNuevo = new Pedido(
    saborPizza,
    tamañoPizza,
    tamañoPapas,
    colorBirra
  );
  Carrito.push(pedidoNuevo);
  let seguir = confirm("Desea realizar otro pedido?");
  if (seguir == true) {
    pedidoNuevo = crearPedido();
  }
};

let pedidoNuevo = crearPedido();
console.log(Carrito);

//Método Find para saber si pidieron Pizza de Roquefort
const hayRoquefort = Carrito.find((el) => el.saborPizza === "Roquefort");
console.log(hayRoquefort);
