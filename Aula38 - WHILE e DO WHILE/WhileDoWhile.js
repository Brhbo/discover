// ESTRUTURA DE REPETIÇÃO
let contagem = 0;

while (contagem  < 5) {
    console.log(contagem);
contagem++;
}

/*

Neste exemplo, o loop WHILE será executado enquanto a variável contador
for MENOR que 5. O bloco de código dentro do loop será executado repetidamente
enquanto a condição for verdadeira. A cada iteração, o valor do contador
é exibido no console, e o contador é incrementado. O loop será interrompido 
quando o contador for igual a 5.

*/

let contador = 0;

do {
    console.log('Contador:', contador);
    contador++;
  } while (contador < 5);


/* 
Neste exemplo, o bloco de código dentro do loop do-while será executado 
pelo menos uma vez, pois a condição é verificada somente após a primeira 
execução. Após a execução do bloco, a condição contador < 5 é verificada.
Se for verdadeira, o bloco será executado novamente. O loop continuará 
até que a condição seja avaliada como falsa, ou seja, quando o contador 
for igual a 5.

*/

/*
Resumindo:
Em resumo, a diferença entre WHILE e DO WHILE é que o while verifica a condição
 antes da primeira execução do bloco, enquanto o do-while verifica a condição 
 após a primeira execução do bloco. Portanto, o do-while garante que o bloco 
 de código seja executado pelo menos uma vez, independentemente da condição.

*/



