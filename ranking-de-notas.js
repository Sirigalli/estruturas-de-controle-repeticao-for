// ============================================================
//   ATIVIDADE 09 – Estruturas de Controle (Repetição - For) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

let readline = require("readline-sync"); 

// ------------------------------------------------------------
// EXERCÍCIO X – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"  → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado" → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:

let aluno1 = {
    nome: readline.question("Digite o nome do aluno: "),
    notas = {
        nota1: readline.questionFloat("Digite a primeira nota: "),
        nota2: readline.questionFloat("Digite a segunda nota: "),
        nota3: readline.questionFloat("Digite a terceira nota: ")
    }
};

let aluno2 = {
    nome: readline.question("Digite o nome do aluno: "),
    notas = {
        nota1: readline.questionFloat("Digite a primeira nota: "),
        nota2: readline.questionFloat("Digite a segunda nota: "),
        nota3: readline.questionFloat("Digite a terceira nota: ")
    }
};

let aluno3 = {
    nome: readline.question("Digite o nome do aluno: "),
    notas = {
        nota1: readline.questionFloat("Digite a primeira nota: "),
        nota2: readline.questionFloat("Digite a segunda nota: "),
        nota3: readline.questionFloat("Digite a terceira nota: ")
    }
};

let turma = [aluno1, aluno2, aluno3];

let media1 = (aluno1.notas.nota1 + aluno1.notas.nota2 + aluno1.notas.nota3) /3;
let media2 = (aluno2.notas.nota1 + aluno2.notas.nota2 + aluno2.notas.nota3) /3;
let media3 = (aluno3.notas.nota1 + aluno3.notas.nota2 + aluno3.notas.nota3) /3;

let mediaGeral = (media1 + media2 + media3) /3;

let situacao1 = "";

if (media1 >= 7) {
    situacao = "Aprovado";
} else if (mediaAluno >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}



console.log("_______________________________");