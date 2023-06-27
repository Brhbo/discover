/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1989
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const alturaEmM = 1.80;
const peso = 84;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso/ (alturaEmM * alturaEmM);
console.log(imc);
anoNascimento = 2019 - idade;
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos e pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);