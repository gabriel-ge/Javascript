const pessoas = [
    "Carlos",
    "Pedro",
    "Luiz",
    "João"
];

const numeros = [10, 8, 6, 9];

const listaDePessoasENumeros = [pessoas, numeros];

function exibeNomeENumero(pessoa) {
    if (listaDePessoasENumeros[0].includes(pessoa)) {

        const [pessoas, numeros] = listaDePessoasENumeros;
        
        const indice = pessoas.indexOf(pessoa);
        const numeroPessoa = numeros[indice];

        console.log(`Olá ${pessoa}`);
        console.log(`Seu número é: ${numeroPessoa}`);

    } else {
        console.log("Não possui cadastro");
    }
}

exibeNomeENumero("Carlos");