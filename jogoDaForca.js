let readline = require(`readline-sync`);

//jogo da forca em js
//jogador escolhe qual tema quer, programa escolhe a palavra aleatoriamente
//programa mostra o jogo da forca com a palavra
//jogador escolhe a letra e programa mostra resultado
//jogador tem 3 tentativas ate acertar a palavra
//mostrar mensagem de tente novamente se jogador falhar ou mensagem de sucesso

const temas = {
    frutas: ["maca", "pera", "laranja"],
    animais: ["macaco", "elefante", "girafa"],
    cores: ["vermelho", "amarelo", "laranja"]
};

let nome = readline.question("Digite o nome do jogador: ");

console.log(`
    ola ${nome}, seja bem vindo ao jogo da forca!!!

    boa sorte!!!
    `);


console.log(`
    ===== TEMAS PARA O JOGO =====
    1 - FRUTAS 
    2 - ANIMAIS
    3 - CORES
`);

let temaEscolhido = readline.questionInt("Escolha um tema: ");


if (temaEscolhido < 1 || temaEscolhido > 3) {
    console.log("Tema invalido");
    process.exit();
};

let lista;

    switch (temaEscolhido) {
        case 1:
            lista = temas.frutas;
            break;
        case 2:
            lista = temas.animais;
            break;
        case 3:
            lista = temas.cores;
            break;
};

let indice = Math.floor(Math.random() * lista.length);
let palavraSecreta = lista[indice];

let tentativa1 = "";
let tentativa2 = "";
let tentativa3 = "";

//FRUTAS
while (temaEscolhido === 1) {
if (palavraSecreta === "maca") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|\
        |    / \
        |
        |________ M_C_
        `);
    tentativa1 = readline.question("Digite uma letra: ");
} else if (palavraSecreta === "pera") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|
        |    / 
        |
        |________ PER_
        `);
    tentativa1 = readline.question("Digite uma letra: ");
} else if (palavraSecreta === "laranja") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|
        |    / 
        |
        |________ L_R_NJ_
        `);
    tentativa1 = readline.question("Digite uma letra: ");
};

if (tentativa1.toLowerCase() === "a" && palavraSecreta === "maca") {
    console.log("MACA");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else if (tentativa1.toLowerCase() === "a" && palavraSecreta === "pera") {
    console.log("PERA");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else if (tentativa1.toLowerCase() === "a" && palavraSecreta === "laranja") {
    console.log("LARANJA");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else {
    console.log("Tente novamente");
};
};
//ANIMAIS
while (temaEscolhido === 2) {
if (palavraSecreta === "macaco") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|\
        |    / \
        |
        |________ M_C_CO
        `);
    tentativa1 = readline.question("Digite uma letra: ");
} else if (palavraSecreta === "elefante") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|
        |    / 
        |
        |________ _L_FANT_
        `);
    tentativa1 = readline.question("Digite uma letra: ");
} else if (palavraSecreta === "girafa") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|
        |    / 
        |
        |________ GIR_F_
        `);
    tentativa1 = readline.question("Digite uma letra: ");
};

if (tentativa1.toLowerCase() === "a" && palavraSecreta === "macaco") {
    console.log("MACACO");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else if (tentativa1.toLowerCase() === "e" && palavraSecreta === "elefante") {
    console.log("ELEFANTE");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else if (tentativa1.toLowerCase() === "a" && palavraSecreta === "girafa") {
    console.log("GIRAFA");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else {
    console.log("Tente novamente");
};
};
//CORES
while (temaEscolhido === 3) {
if (palavraSecreta === "vermelho") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|\
        |    / \
        |
        |________ V_RM_LHO
        `);
    tentativa1 = readline.question("Digite uma letra: ");
} else if (palavraSecreta === "amarelo") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|
        |    / 
        |
        |________ _M_RELO
        `);
    tentativa1 = readline.question("Digite uma letra: ");
} else if (palavraSecreta === "laranja") {
    console.log(`
        
        -------
        |     |
        |     O
        |    /|
        |    / 
        |
        |________ L_R_NJ_
        `);
    tentativa1 = readline.question("Digite uma letra: ");
};

if (tentativa1.toLowerCase() === "e" && palavraSecreta === "vermelho") {
    console.log("VERMELHO");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else if (tentativa1.toLowerCase() === "a" && palavraSecreta === "amarelo") {
    console.log("AMARELO");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else if (tentativa1.toLowerCase() === "a" && palavraSecreta === "laranja") {
    console.log("LARANJA");
    console.log(`Parabens ${nome}, voce venceu!!!`);
} else {
    console.log("Tente novamente");
};
};