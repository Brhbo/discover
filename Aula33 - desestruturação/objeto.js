// DESESTRUTURAÇÃO COM OBJETOS

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Oliveira',
    idade: 30,
    endereço: {
        rua: 'Cobden Avenue',
        numero: 29,
        cidade: 'Southampton',
        país: 'Reino Unido',
        postcode: 'SO181FU',
    }
};

// Atribuição via desestruturação

const {endereço: {cidade, postcode}} = pessoa;
console.log(cidade, postcode );