// FOR IN -> Lê os indices
//                0       1       2
const frutas = ['Pêra', 'Maçã', 'Uva']

const carros = ['Veloster', 'Camaro', 'Passat']

for (let indice in frutas) {
    console.log(frutas[indice]);
}

 for (let indice in carros) {
   console.log(carros[indice]);
}

// Esse ÍNDICE ai vc pode colocar qualquer nome

const pessoa = {
    Nome:'Bruno',
    Sobrenome:'Oliveira',
    Idade: 26,
    País:'Reino Unido',
    Formação:'Programador e Bacharel em Direito'
};
 
 for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
 };


// Nesse caso abaixo seria uma forma de executar apenas um elemento:

/*
    for (let chave in pessoa) {
        if (chave === 'Sobrenome'){
            console.log(pessoa[chave])
        }
    };
*/