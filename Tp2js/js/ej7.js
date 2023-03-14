/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que 
indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let num;

num = parseInt(prompt("Ingrese un numero:"));

while(num>50){
    num = parseInt(prompt("Número erroneo \n Ingrese un numero nuevamente:"));
}

for (let cont=num;cont>=1;cont--){
    
    for (let ban=1;ban<=cont;ban++){
        document.write(cont)
    }

    document.write('<br>')
}