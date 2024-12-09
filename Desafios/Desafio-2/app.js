// 1. Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld() {
    console.log("Olá, mundo!");
}
helloWorld();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibeNome(nome) {
    return console.log(`Olá, ${nome}!`);
}

let nome = prompt('Qual seu nome?');
exibeNome(nome); // Passa o valor do nome como parâmetro

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function somaNumero(numero) {
    return numero * 2;
}

let numero = prompt('Digite um número!');
console.log(somaNumero(Number(numero))); // Converte para número antes de passar como argumento

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumero(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

let numero1 = Number(prompt('Digite um valor para iniciar o cálculo da média.'));
let numero2 = Number(prompt('Digite agora um segundo valor.'));
let numero3 = Number(prompt('Digite o último valor para realizar o cálculo da média entre eles.'));

console.log(`A média dos números é: ${mediaNumero(numero1, numero2, numero3)}`);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numeroOne, numeroTwo) {
    if (numeroOne > numeroTwo) {
        console.log(`O numero maior é ${numeroOne}`);
    } else {
        console.log(`O numero maior é ${numeroTwo}`);
    };
}

let numeroOne = Number(prompt('Digite um numero.'));
let numeroTwo = Number(prompt('Digite um segundo numero.'));

maiorNumero(numeroOne, numeroTwo); // Passa os valores coletados como argumentos

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(numeroMultiplica) {
    return (numeroMultiplica) * numeroMultiplica;
}

let numeroMultiplica = Number(prompt('Digite um valor para realizar a multiplicação.'));

console.log(multiplicaNumero(numeroMultiplica));
