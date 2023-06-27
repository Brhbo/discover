const verdadeira = true;

// Let tem escopo de bloco {... bloco ...}
// VAR só tem escopo de FUNÇÃO

let nome = 'Bruno'; //criando
var nome2 = 'Pedro'; //criando

if (verdadeira) {
    let nome = 'Borges'; // criando
    var nome2 = 'Rogério'; // redeclarando

    if (verdadeira) {
      var nome2 = 'Oliveira'; //redeclarando
      let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);

// ESSE EXEMPLO FOI MAIS DO ESCOPO DE BLOCO