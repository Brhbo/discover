/* OPERADORES ARITMÉTICOS, DE ATRIBUIÇÃO e INCREMENTO */

/* vejamos os operadores aritméticos:
+ Adição / Concatenação
-
/
*
** Potenciação
% Resto da divisão
A seguir exemplo abaixo sobre concatenação usando as aspas:
*/
const num1 = '5';
const num2 = 10;
console.log(num1 + num2);

/* INCREMENTO
++ veja o exemplo abaixo:
*/
let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
contador++; //6
console.log(contador);

/* 
Também temos o operador de DECREMENTO - -
*/
let contador = 4;
-- contador;
console.log(contador);
// quando vc executar vai dar 3


/* OPERADORES DE ATRIBUIÇÃO
*= esse sinal vai multiplicar o valor que voce atribuiu antes
**= esse vai fazer a potenciação 
*/
let contador = 2;
contador *= 4;
console.log(contador); // vai dar 8

let contador = 2;
contador **= 4;
console.log(contador); // vai dar 16, porque o 2 sofreu a potenciação do 4

/*
NaN = Not a number (É um erro)
ParseInt = vai transformar em numero inteiro o que estiver dentro do parentese
ParseFloat = transforma em numero flutuante o que estiver dentro do parentese
number = JÁ TRANSFORMA AUTOMATICAMENTE SEJA FLUTUANTE OU INTEIRO
*/

const num1 = 10;
const num2 = parseInt('5');
console.log(num1 + num2); // vai dar 15

