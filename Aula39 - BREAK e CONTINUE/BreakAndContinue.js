const sequencia = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of sequencia) {
    if (numero === 2) {
        continue;
    }

    if (numero === 3) {
        continue;
    }

    console.log(numero)

    if (numero === 6) {
        break;
    }
}
    
/*
CONTINUE -> O contador vai pular o número 2 e o 3,
e vai dar seguimento a execução.

BREAK -> O contador vai parar quando encontrar o número que vc disse


*/