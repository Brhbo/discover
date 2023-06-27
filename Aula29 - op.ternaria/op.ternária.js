// ? :
/*
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log ('Usuário VIP');
} else if (pontuacaoUsuario <= 1000) {
    console.log('Usuário normal');
} 
*/


/*
Se vc prestar atenção, não era necessário colocar esse ELSE IF falando da
pontuação, porque ficou redundante. Era só colocar o CONSOLE.LOG

/*
Vamos para o exemplo de Operação Ternária
*/

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario, corPadrao);

/*
(condição) ? 'Valor para verdadeiro' : 'Valor para falso';
*/

