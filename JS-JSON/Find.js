const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "telefone", "9916828153");


console.log(encontrado);