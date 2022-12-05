function promedioNotas() {
  let suma = 0;
  let alumnos = 0;
  let edad = prompt(
    "Ingrese las edades de las personas \n Para ver el resultado ingrese Y"
  );
  while (edad != "Y") {
    suma = suma + parseFloat(edad);
    alumnos++;
    edad = prompt(
      "Ingrese las edades de las personas \n Para ver el resultado ingrese Y"
    );
  }
  let promedio = suma / alumnos;
  alert("El promedio de las edades es : " + promedio);
}
function edadMayor() {
  let mayor = -1;
  let edad = prompt("Ingrese las edades: \n para ver el resultado ingrese Y ");
  while (edad != "Y") {
    parseFloat(edad);
    if (edad > mayor) {
      mayor = edad;
    }
    edad = prompt("Ingrese las edades: \n para ver el resultado ingrese Y ");
  }
  alert("La edad mas alta es: " + mayor);
}
function edadMenor() {
  let menor = 99;
  let edad = prompt("Ingrese las edades: \n para ver el resultado ingrese Y ");
  while (edad != "Y") {
    parseFloat(edad);
    if (edad < menor) {
      menor = edad;
    }
    edad = prompt("Ingrese las edades: \n para ver el resultado ingrese Y ");
  }
  alert("La edad mas baja es: " + menor);
}
let opcion = prompt(
  "Ingrese la opcion de la operacion que desea realizar \n 1. Promedio de edades \n 2. Mayor de las edades \n 3. Menor de las edades \n X. Salir"
);
while (opcion != "X") {
  switch (opcion) {
    case "1":
      promedioNotas();
      break;
    case "2":
      edadMayor();
      break;
    case "3":
      edadMenor();
      break;
    case "X":
      break;
  }
  opcion = prompt(
    "Ingrese la opcion de la operacion que desea realizar \n 1. Promedio de edades \n 2. Mayor de las edades \n 3. Menor de las edades \n X. Salir"
  );
}
