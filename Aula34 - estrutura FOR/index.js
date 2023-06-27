
    for (let i = 0; i <= 5; i++) {
     console.log(`Linha ${i}`);
  } 

//ESSE SERÁ O RESULTADO EXECUTADO
/*
console.log('Linha 00');
console.log('Linha 01');
console.log('Linha 02');
console.log('Linha 03');
console.log('Linha 04');
console.log('Linha 05');
*/

// Se eu quero checar por exemplo se os numeros são pares:

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar' ;
    console.log(i, par);
}

/*
O resultado será esse:
0 par
1 impar
2 par
3 impar
4 par
5 impar
6 par
7 impar
8 par
9 impar

OBSERVE QUE FOI ATÉ O NÚMERO 9, PORQUE O ÍNDICE COMEÇA COM 0 ZERO
*/


    const frutas = ['Beterraba', 'Maçã', 'Uva', 'Melão', 'Pão'];

    for (let i = 0; i < frutas.length; i++) {
        console.log(`indice ${i}`, frutas[i]);
    }

/*
O resultado será esse:
indice 0 Beterraba
indice 1 Maçã
indice 2 Uva
indice 3 Melão
indice 4 Pão

Quando usei o LENGTH ele me mostra o tamanho do meu índice
*/

