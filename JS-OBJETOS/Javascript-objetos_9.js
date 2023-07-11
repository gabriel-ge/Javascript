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

const chaveDoObjeto = Object.keys(cliente);

if (!chaveDoObjeto.includes("enderecos")) {
    console.error("É necessário ter um endereço cadastrado")
}