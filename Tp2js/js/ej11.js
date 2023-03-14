/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
*/

let nom1 = prompt("Ingrese 1er nombre:");
let nom2 = prompt("Ingrese 2do nombre:");
let nom3 = prompt("Ingrese 3er nombre:");
let edad1 = parseInt(prompt("Ingrese edad de la 1er persona:"));
let edad2 = parseInt(prompt("Ingrese edad de la 2da persona:"));
let edad3 = parseInt(prompt("Ingrese edad de la 3er persona:"));
let mayor;

if (edad1===edad2){
    if (edad1>edad3){
        document.write(nom1 + ' y ' + nom2 + ' Tienen la misma edad y son mayores que '+nom3);
    }else
    {
        document.write(nom3 + 'Es el mayor de los tres')
    }
}else
{
    if (edad1===edad3){
        if(edad1>edad2){
            document.write(nom1 + ' y ' + nom3 + ' Tienen la misma edad y son mayores que '+nom2);
        }else
        {
            document.write(nom2 + 'Es el mayor de los tres')
        }
    }

}