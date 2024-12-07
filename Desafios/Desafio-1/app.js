let title = document.querySelector('h1');
title.innerHTML = 'Hora do desafio';

function verifyClick() {
    console.log('O botão foi clicado');
}

function alertVerify() {
    alert('Eu amo JS');
}

function whatIsYourCity() {
    let cidade = prompt('Qual o nome da sua cidade?');
    cidade = alert(`Estive em ${cidade} e lembrei de você.`);
}

function sumNumbers() {
    let numero1 = parseFloat(prompt('Digite um número para soma.'));
    let numero2 = parseFloat(prompt('Digite o segundo número para soma.'));
    let resultado = numero1 + numero2;
    alert(`${numero1} mais ${numero2} é igual a ${resultado}`); 
}

