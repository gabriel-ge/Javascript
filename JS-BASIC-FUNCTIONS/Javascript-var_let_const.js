//----------------var----------------//
var altura = 5;
var comprimento = 5;

var area = altura * comprimento;

console.log(area);


//----------------let----------------//

let forma = 'T';
let altura = 5;
let comprimento = 5;

let area;

if (forma === 'retangulo') {
    area = altura * comprimento;
    console.log("Retangulo");
} else {
    area = (altura * comprimento) / 2;
    console.log("Triangulo");
}

console.log(area);

//----------------const----------------//

const formato = 'quadrado';
const altura = 5;
const comprimento = 5;

let area;

if (formato === 'retangulo') {
    area = altura * comprimento;
    console.log("Retangulo");
} else {
    area = (altura * comprimento) / 2;
    console.log("Triangulo");
}

console.log(area);



