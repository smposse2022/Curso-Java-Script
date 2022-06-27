// Get element
const button_logIn = document.getElementById("button_login");
const ingresoNombreYapellido = document.getElementById("inputNombre");
const ingresoMail = document.getElementById("inputMail");
const ingresoMesa = document.getElementById("inputMesa");
const formularioInicial = document.querySelector(".inicial_form");
const mensajeInicial = document.getElementById("mensaje_inicial");
const totalTotal = document.getElementById("itemCartTotal");
const contadorCarrito = document.getElementById("cart-counter");
const buttonPagar = document.getElementById("button_pagar");
buttonPagar.addEventListener("click", pagar);
button_logIn.addEventListener("click", guardarLogIn);

//Login - Local Storage
function guardarLogIn() {
  if (
    !ingresoNombreYapellido.value ||
    !ingresoMail.value ||
    !ingresoMesa.value ||
    ingresoMesa.value < 1 ||
    ingresoMesa.value > 20
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe ingresar Nombre y Apellido, Mail y un número de mesa válido (entre 1 y 20)",
    });
  } else {
    localStorage.setItem(
      "Nombre",
      JSON.stringify(ingresoNombreYapellido.value)
    );
    localStorage.setItem("Mesa", JSON.stringify(ingresoMesa.value));
    mensajeInicial.innerHTML = "";
    mensajeInicial.innerHTML = `<h2>Usted va a hacer un pedido a nombre de ${localStorage.getItem(
      "Nombre"
    )}</h2>
    <h3>para la mesa N° ${localStorage.getItem("Mesa")}</h3>
    </div>
  `;
    button_logIn.innerText = "Modificar";
  }
}
function chequeoLoginEnStorage() {
  if (JSON.parse(localStorage.getItem("Nombre"))) {
    mensajeInicial.innerHTML = "";
    mensajeInicial.innerHTML = `<h2>Usted va a hacer un pedido a nombre de ${localStorage.getItem(
      "Nombre"
    )}</h2>
    <h3>para la mesa N° ${localStorage.getItem("Mesa")}</h3>
    </div>
  `;
    button_logIn.innerText = "Modificar";
  }
}
chequeoLoginEnStorage();

// Función Contructora
class Producto {
  constructor(nombre, tamaño, precio, id, img, cantidad) {
    this.nombre = nombre;
    this.tamaño = tamaño;
    this.precio = precio;
    this.id = id;
    this.img = img;
    this.cantidad = cantidad;
    this.precioFinal = this.precio * this.cantidad;
  }
}
// Fetch
fetch("./datos.json")
  .then((resp) => resp.json())
  .then((data) => crearCards(data));
const cards_section = document.getElementById("cards_section");
const carrito_section = document.getElementById("carrito_section");
const total_carrito = document.getElementById("totalCarrito");

// Creo cards de cada objeto dentro del array que traigo por fetch
function crearCards(array) {
  array.forEach((producto) => {
    cards_section.innerHTML += `<div class ="card col-lg-2 col-md-3 col-sm-4 m-1">
    <img src=${producto.img} class= "card-image-top" alt="...">
    <h5 class= "card-title text-center">${producto.nombre}</h5>
    <div class= "card-body text-center">
  
    <p class= "card-text">${producto.precio}</p>
    <button id="btn${producto.id}">Añadir al carrito<i class="fa fa-shopping-cart in-card" aria-hidden="true"></i> </button>
  </div>`;
  });
  array.forEach((producto) => {
    document
      .querySelector(`#btn${producto.id}`)
      .addEventListener("click", (e) => {
        const productoCLickeado = array.find(
          (item) => `btn${item.id}` == e.target.id
        );

        console.log(productoCLickeado);
        enviarAlCarrito(productoCLickeado);
        mostrarCarrito();
      });
  });
}
// Carrito

let Carrito = JSON.parse(localStorage.getItem("Carrito")) || [];
mostrarCarrito();

function enviarAlCarrito(productoCLickeado) {
  if (
    !JSON.parse(localStorage.getItem("Nombre")) ||
    !JSON.parse(localStorage.getItem("Mesa"))
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe ingresar primero Nombre, Mail y Mesa",
    });
  } else {
    let existe = Carrito.some((element) => element.id === productoCLickeado.id);
    if (!existe) {
      productoCLickeado.cantidad = 1;
      Carrito.push(productoCLickeado);
    } else {
      productoCLickeado.cantidad++;
    }
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ada5a5, #948b8b)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
}
function mostrarCarrito() {
  carrito_section.innerHTML = "";
  Carrito.forEach((producto) => {
    carrito_section.innerHTML += `<div class ="card">
    <img src=${producto.img} class= "card-image-top" alt="...">
    <h5 class= "card-title text-center">${producto.nombre}</h5>
    <div class= "card-body text-center">
  
    <p class= "card-text">${producto.tamaño}</p>
    <p id="precioPorcantidad${producto.id}" class= "card-text">$${
      producto.precio * producto.cantidad
    }</p>
    <button class= "btn btn-dark" id="menos_carrito${
      producto.id
    }"> <i class="fa fa-minus" aria-hidden="true"></i> </button> <span id="cant_counterCarrito${
      producto.id
    }" class ="item-count rounded ms-3 me-3">${
      producto.cantidad
    }</span><button class= "btn btn-dark" id="mas_carrito${
      producto.id
    }"><i class="fa fa-plus rounded" aria-hidden="true"></i> </button><br><br>
    <button class= "btn btn-danger" id="borrar${
      producto.id
    }">Eliminar Todos<i class="fa fa-shopping-cart in-card" aria-hidden="true"></i> </button>
</div>`;
  });
  Carrito.forEach((producto) => {
    document
      .querySelector(`#menos_carrito${producto.id}`)
      .addEventListener("click", () => {
        if (`${producto.cantidad}` < 2) {
          Carrito = Carrito.filter((element) => element.id !== producto.id);
          mostrarCarrito();
          Toastify({
            text: "Producto eliminado",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #F299A0, #F26B76)",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
        } else {
          `${producto.cantidad--}`;
          document.querySelector(
            `#cant_counterCarrito${producto.id}`
          ).innerText = `${producto.cantidad}`;
          document.querySelector(
            `#precioPorcantidad${producto.id}`
          ).innerText = `$${producto.precio * producto.cantidad}`;
          sumarTotal();
        }
      });
  });
  Carrito.forEach((producto) => {
    document
      .querySelector(`#mas_carrito${producto.id}`)
      .addEventListener("click", () => {
        `${producto.cantidad++}`;
        document.querySelector(
          `#cant_counterCarrito${producto.id}`
        ).innerText = `${producto.cantidad}`;
        document.querySelector(
          `#precioPorcantidad${producto.id}`
        ).innerText = `$${producto.precio * producto.cantidad}`;
        sumarTotal();
      });
  });

  localStorage.setItem("Carrito", JSON.stringify(Carrito));
  borrarProducto();
  sumarTotal();
}
function borrarProducto() {
  Carrito.forEach((producto) => {
    document
      .querySelector(`#borrar${producto.id}`)
      .addEventListener("click", () => {
        Carrito = Carrito.filter((element) => element.id !== producto.id);
        mostrarCarrito();
        Toastify({
          text: "Producto eliminado",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #F299A0, #F26B76)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      });
  });
}

// Sumar Total
function sumarTotal() {
  let suma = Carrito.reduce((acc, item) => {
    return (acc = acc + item.precio * item.cantidad);
  }, 0);
  totalTotal.innerHTML = `Total a pagar $${suma}`;
  contadorCarrito.innerText = `$${suma}`;
}
// Pagar
function pagar() {
  if (JSON.parse(localStorage.getItem("Carrito")) == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El Carrito no debe estar vacío",
    });
  } else {
    Swal.fire({
      title: "Pagar",
      html: `<div class="col-md6 mb-3 mx-auto">
      <label for="tarjeta de crédito" class="form-label">Tarjeta de crédito</label>
      <input type="text" class="form-control" placeholder="Ingrese el número de su tarjeta de crédito/débito"/></div>
      <div class="col-md6 mb-3 mx-auto">
      <label for="DNI" class="form-label">DNI</label>
      <input type="text" class="form-control" placeholder="Ingrese su número de documento"/></div>
      <div class="col-md6 mb-3 mx-auto">
      <label for="nombre" class="form-label">Nombre y apellido</label>
      <input type="text" class="form-control" placeholder="Ingrese su nombre tal como figura en la tarjeta"/></div>
      <div class="col-md6 mb-3 mx-auto">
      <label for="Mes vencimiento" class="form-label">Mes de Vencimiento</label>
      <input type="text" class="form-control" placeholder="Ingrese mes de vencimiento"/></div>
      <div class="col-md6 mb-3 mx-auto">
      <label for="Año vencimiento" class="form-label">Año vencimiento</label>
      <input type="text" class="form-control" placeholder="Ingrese año de vencimiento"/></div>
      <div class="col-md6 mb-3 mx-auto">
      <label for="Código de seguridad" class="form-label">Código de seguridad</label>
      <input type="password" class="form-control" placeholder="Ingrese el código de seguridad de su tarjeta"/></div>
      `,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Pagar",
      denyButtonText: `Modificar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          "Su compra fue procesada con éxito! En breve le llevarán su pedido a la mesa",
          "",
          "success"
        );
      } else if (result.isDenied) {
        Swal.fire("Puede seguir comprando", "", "info");
      }
    });
  }
}

mostrarCarrito();
sumarTotal();
