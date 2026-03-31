let readline = require("readline-sync");

//Sorteio de 5 numeros pelo PC
//Aparecer os 5 numeros por 5 segundos no console depois desaparece do console
//Usuario tenta acertar a orden dos 5 numeros
//Mensagem de erro se o usuario errar a ordem
//Mensagem de sucesso se o usuario acertar


const nome = readline.question("Digite o nome do jogador: ");

console.log(`Bem vindo ao jogo ${nome}.

Tente adivinhar e digitar a ordem correta dos numeros.
`)

let numerosRandom = [];
let respostas = [];

let acertou;

// geração nums aleatorios

numerosRandom.push(Math.floor(Math.random() * 101));

setTimeout(() => {
    console.clear();
  }, 3000);

setTimeout(() => console.log(`====== PRIMEIRO NUMERO ======`), 5000)

setTimeout(() => {
    console.clear();
}, 7000);

setTimeout(() => console.log(numerosRandom[0]), 9000)

setTimeout(() => {
    console.clear();
}, 11000);

setTimeout(() => console.log(`====== SEGUNDO NUMERO ======`), 13000)

setTimeout(() => {
    console.clear();
}, 15000);

numerosRandom.push(Math.floor(Math.random() * 101));

setTimeout(() => console.log(numerosRandom[1]), 17000);

setTimeout(() => {
    console.clear();
}, 19000);

setTimeout(() => console.log(`====== TERCEIRO NUMERO ======`), 21000)

setTimeout(() => {
    console.clear();
}, 23000);

numerosRandom.push(Math.floor(Math.random() * 101));

setTimeout(() => console.log(numerosRandom[2]), 25000);

setTimeout(() => {
    console.clear();
}, 27000);

setTimeout(() => console.log(`====== QUARTO NUMERO ======`), 29000)

setTimeout(() => {
    console.clear();
}, 31000);

numerosRandom.push(Math.floor(Math.random() * 101));

setTimeout(() => console.log(numerosRandom[3]), 33000);

setTimeout(() => {
    console.clear();
}, 35000);

setTimeout(() => console.log(`====== QUINTO NUMERO ======`), 37000)

setTimeout(() => {
    console.clear();
}, 39000);

numerosRandom.push(Math.floor(Math.random() * 101));

setTimeout(() => console.log(numerosRandom[4]), 41000);

setTimeout(() => {
    console.clear();
}, 43000);

// coleta num jogador

setTimeout(() => {
    respostas.push(readline.questionInt("Digite o primeiro numero que foi mostrado no console: "));
}, 45000);
setTimeout(() => {
    respostas.push(readline.questionInt("Digite o segundo numero que foi mostrado no console: "));
}, 45001);
setTimeout(() => {
    respostas.push(readline.questionInt("Digite o terceiro numero que foi mostrado no console: "));
}, 45002);
setTimeout(() => {
    respostas.push(readline.questionInt("Digite o quarto numero que foi mostrado no console: "));
}, 45003);
setTimeout(() => {
    respostas.push(readline.questionInt("Digite o quinto numero que foi mostrado no console: "));
}, 45004);

setTimeout(() => {
    acertou = numerosRandom.every((num, i) => num === respostas[i]);
   
    if (acertou) {
        console.log("Voce acertou a ordem, Parabens!!!")
    } else {
        console.log("Voce errou a ordem!!!")
    };
}, 45006);

setTimeout(() => {
    console.log(`
    Suas respostas = ${respostas}.
    Numeros gerados = ${numerosRandom}.`)
}, 45007);