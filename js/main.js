function promedioNotas() {
  let nota = prompt("Ingrese las notas \n Para ver el resultado ingrese Y");
}

do {
  let opcion;
  prompt(
    "Ingrese la opcion de la operacion que desea realizar \n 1. Promedio de notas \n 2. Mayor de las notas \n 3. Menor de las notas \n X. Salir"
  );
  switch (opcion) {
    case "1":
      promedioNotas();
      break;
    case "2":
      notaMayor();
      break;
    case "3":
      notaMenor();
      break;
    case "X":
      break;
  }
} while (opcion != "X");
