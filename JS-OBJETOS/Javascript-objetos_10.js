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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para telefone ${telefoneResidencial}`);
    console.log(`Ligando para telefone ${telefoneComercial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);