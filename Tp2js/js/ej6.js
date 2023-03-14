/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

for (let cont=1;cont<=30;cont++){
    
    for (let num=1;num<=cont;num++){
        document.write(cont)
    }

    document.write('<br>')
}