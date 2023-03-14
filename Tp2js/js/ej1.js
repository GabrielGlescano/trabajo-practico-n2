/* 1- Escribir un programa que solicite la edad 
y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

let edad;

edad = parseInt(prompt("Ingrese la edad:"));

if (edad > 100) {
  document.write("Edad No valida");
} else {
    if (edad>18) {
        document.write("Si, puede conducir");
    }else
    {
        document.write("No puede conducir");
    }
}
