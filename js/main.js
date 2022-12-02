let personas = 0;
let suma = 0;

let edad = prompt("ingrese la edad de la persona, para salir ingrese X");

while (edad != "X") {
  if (edad == "X") {
  } else if ((edad > 0) & (edad < 110)) {
    personas++;
    suma = suma + parseFloat(edad);
  } else {
    alert("Numero fuera de rango de edad ");
  }
  edad = prompt("ingrese la edad de la persona, para salir ingrese X");
}

let promedio = suma / personas;
alert("El promedio de edad es : " + promedio);
