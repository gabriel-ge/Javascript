const cliente = {
    nome: "Gabriel",
    idade: 23,
    linkedin: "https://linkedin.com/in/gabriel-ge",
    telefone: ["981818181", "982828282"],
}

cliente.enderecos = [
    {
        rua: "iraí",
        numero: 80,
        bairro: "Santa Teresa",
        apartamento: false,
    },
];

cliente.enderecos.push({
    rua: "Pinto Bandeira",
    numero: 345,
    bairro: "Santa Teresa",
    apartamento: false,
    complemento: "SEBRATEL",
})

console.log(cliente);