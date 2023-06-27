/*   PARÂMETROS EM FUNÇÕES:
Uma função pode se comunicar com o programa onde é executada por meio do uso
de ARGUMENTOS passados a ela, assim com pelo valor retornado pela função.
Argumentos são passados a uma função usando-se PARÂMETROS, que são nomes 
declarados no cabeçalho da função.

O exemplo abaixo mostra um cabeçalho de função com dois parâmetros declarados:

*/

    function soma(num1, num2)

/*
-> Passagem por valor e referência:

Parâmetros de tipos PRIMITIVOS, como STRINGS, NÚMERICOS ou BOOLEANOS são
passados por VALOR. Isso  significa que se o argumento for alterado dentro
da função, essa alteração NÃAAAO se reflete na variável do programa original
(fora da função).

Já OBJETOS são passados por REFERÊNCIA. Isso quer dizer que se uma alteração 
for realizada no objeto dentro da função, a alteração irá se propagar para
o objeto FORA da função.

Quando eu defino a função MENSAGEM para receber como PARÂMETRO um nomo digitado
pelo um nome digitado pelo usuário, e então ao chamá-la fornecemos esse nome
como argumento:

function Mensagem(nome) {
    alert("Parabéns" + nome);
}
// chamando a função:
let a = prompt("Digite seu nome na caixa abaixo:");
Mensagem(a);

-> PASSANDO MÚLTIPLOS PARÂMETROS À FUNÇÃO:

function Mensagem(nome, sobrenome){
    alert("Bem-vindo," + nome + "" + sobrenome);
}
//chamando a função:
let a = prompt("Digite seu nome na caixa abaixo:");
let b = prompt("Entre com seu sobrenome:");
Mensagem(a,b);

*/



