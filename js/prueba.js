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
console.log("Hola " + nombreUsuario);
