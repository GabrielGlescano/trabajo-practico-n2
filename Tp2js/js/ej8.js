/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let num;

num = parseInt(prompt("Ingrese un numero:"));

while(num>50){
    num = parseInt(prompt("Número erroneo \n Ingrese un numero nuevamente:"));
}

for (let cont=1;cont<=num;cont++){
    
    for (let ban=1;ban<=cont;ban++){
        document.write(ban)
    }

    document.write('<br>')
}