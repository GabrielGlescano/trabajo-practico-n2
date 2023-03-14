/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math
*/

let i;
let j;
let tab;
let num;

i = parseInt(prompt("Ingrese la cantidad de filas:"));
j = parseInt(prompt("Ingrese la cantidad de columnas:"));
tab=i*j;


for (let c=1;c<=j;c++){
    
    for (let f=1;f<=i;f++){
        document.write(tab + ' ');
        tab--;
    }
    document.write("<br>");
}