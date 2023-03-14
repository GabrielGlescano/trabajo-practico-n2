/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles 
son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. 
Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

let restcuatro;
let restnueve;
let restcinco;

for (let cont = 1; cont <= 500; cont++) {
  document.write(cont);

  restcuatro = cont % 4;
  restcinco = cont % 5;
  restnueve = cont % 9;

  if (restcuatro === 0) {
    document.write(" / es multiplo de 4");
  }
  if (restnueve === 0) {
    document.write(" / es multiplo de 9");
  }

  document.write("<br>");

  if (restcinco === 0) {
    document.write(" <hr> ");
  }

}
