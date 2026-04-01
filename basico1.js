//Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

const nome = "junior";
const idade = 26;
console.log(`ola meu nome é ${nome} e eu tenho ${idade} anos`);

//Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

let readline = require(`readline-sync`);
let num1 = readline.questionInt("Digite o primeiro numero: ");
let num2 = readline.questionInt("Digite o segundo numero: ");

console.log("A soma dos numeros é:" , num1 + num2);
console.log("A subtracao dos numeros é:" , num1 - num2);
console.log("A multiplicacao dos numeros é:" , num1 * num2);
console.log("A divisao dos numeros é:" , num1 / num2);

//Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

const idade2 = readline.questionInt("Digite sua idade: ");

if (idade2 >= 18) {
    console.log("Voce é maior de idade");
} else {
    console.log("Voce e menor de idade");
};


//Loops: Crie um loop que imprima todos os números de 1 a 100.




//Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.


//Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.


//Objetos: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. Imprima cada propriedade no console.


//Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.


//Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas.


//Promises e Fetch API: Use a Fetch API para fazer uma chamada para uma API pública (como a API do JSONPlaceholder) e exibir os resultados no console.