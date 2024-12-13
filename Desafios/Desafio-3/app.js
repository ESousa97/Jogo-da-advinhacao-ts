// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function massaCorporal(altura, peso) {
    let imc = peso / (altura * altura);
}

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(n) {
    let resultado = 1; // Começamos com 1, pois o fatorial de 0 ou 1 é 1
    for (let i = 1; i <= n; i++) { // Loop de 1 até n
        resultado *= i; // Multiplicamos o valor atual de 'resultado' por i
    }
    return resultado; // Retornamos o resultado final
}

console.log(fatorial(5)); // Saída: 120

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterParaReais(valorEmDolar) {
    const cotacaoDolar = 4.80; // Cotação fixa do dólar
    return valorEmDolar * cotacaoDolar; // Multiplica o valor em dólar pela cotação
}

// Exemplo de uso:
let valorEmDolar = 100; // Valor em dólares que queremos converter
let valorEmReais = converterParaReais(valorEmDolar);

console.log("O valor em reais é: R$", valorEmReais.toFixed(2)); // Exibe o resultado com 2 casas decimais

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularSala(altura, largura) {
    let area = altura * largura; // Cálculo da área (altura * largura)
    let perimetro = 2 * (altura + largura); // Cálculo do perímetro (2 * (altura + largura))

    console.log("A área da sala é:", area, "m²"); // Mostra a área
    console.log("O perímetro da sala é:", perimetro, "m"); // Mostra o perímetro
}

// Exemplo de uso:
let altura = 5; // Altura da sala em metros
let largura = 4; // Largura da sala em metros

calcularSala(altura, largura); // Chama a função com os valores fornecidos

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularSalaCircular(raio) {
    const pi = 3.14; // Valor de Pi
    let area = pi * raio * raio; // Fórmula da área do círculo (π * r²)
    let perimetro = 2 * pi * raio; // Fórmula do perímetro (2 * π * r)

    console.log("A área da sala circular é:", area.toFixed(2), "m²"); // Mostra a área
    console.log("O perímetro da sala circular é:", perimetro.toFixed(2), "m"); // Mostra o perímetro
}

// Exemplo de uso:
let raio = 3; // Raio da sala em metros
calcularSalaCircular(raio); // Chama a função com o raio fornecido

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
    console.log(`Tabuada do número ${numero}:`);
    for (let i = 1; i <= 10; i++) { // Loop de 1 a 10
        console.log(`${numero} x ${i} = ${numero * i}`); // Exibe o resultado da multiplicação
    }
}

// Exemplo de uso:
let numero = 5; // Número para calcular a tabuada
mostrarTabuada(numero); // Chama a função passando o número como parâmetro
