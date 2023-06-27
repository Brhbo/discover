/*
Essa aula vai ser sobre um FOR que é específico para objetos ITERÁVEIS, como
por exemplo, uma STRING ou um ARRAY que tenha indices ali que podem ser
ITERÁVEIS
*/

// Cada letra do meu nome é um índice
//            0123456789...
const nomes = ['Bruno Henrique'];


for ( let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
    
}

console.log('##########');

// Esse ai de cima foi o FOR CLÁSSICO... vamos ver outros


for (let i in nomes) {
console.log(nomes[i]);
}

console.log('##########');


// Nesse exemplo acima, estamos buscando o ÍNDICE

for (let valor of nomes) {
console.log(valor); 
}

// Nesse acima, estamos buscando o VALOR
console.log('##########');


 nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
  });

/*
RESUMO:

-> FOR CLÁSSICO: Geralmente com ITERÁVEIS (ARRAYS ou STRINGs)
-> FOR IN: Retorna o ÍNDICE ou CHAVE (STRINGS, ARRAYS ou OBJETOS)
-> FOR OF: Retorna o VALOR em si (iteráveis, arrays ou string)

*/