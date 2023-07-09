const nomes = ["Gabriel", "Isabela", "joão", "Marcia"];

// ----- EXEMPLO 1 -----
nomes.forEach(function (nome) {
    console.log(nome);
});

// ----- EXEMPLO 2 = Arrow Function -----
nomes.forEach((nome) => {
    console.log(nome);
});

// ----- EXEMPLO 3 -----
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);