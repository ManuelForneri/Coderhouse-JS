let edad = prompt("ingrese la edad de la persona, para salir ingrese X");
let personas = 0;
let suma = 0;

while (edad != "X") {
  if (edad == "X") {
    console.log("Salio");
    console.log(personas);
    console.log(suma);
  } else if ((edad > 0) & (edad < 110)) {
    personas++;
    suma = suma + parseInt(edad);
  }
  edad = prompt("ingrese la edad de la persona, para salir ingrese X");
}

let promedio = suma / personas;
alert("El promedio de edad es :" + promedio);
