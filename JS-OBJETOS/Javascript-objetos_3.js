const cliente = {
    nome: "Gabriel",
    idade: 23,
    cpf: "000.000.000-00",
    linkedin: "https://linkedin.com/in/gabriel-ge",
};

console.log(`O cliente: ${cliente["nome"]}, portador do CPF ${cliente.cpf.substring(0, 3)} tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

