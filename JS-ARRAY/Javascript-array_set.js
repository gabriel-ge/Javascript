const nomes = [
    "Ana",
    "Clara",
    "Maria",
    "Maria",
    "João",
    "João",
    "João"
];

const nomeAtualizados = [...new Set(nomes)];

console.log(nomeAtualizados);