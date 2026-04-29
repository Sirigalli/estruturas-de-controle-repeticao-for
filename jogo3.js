// ============================================================
//   JOGO: Batalha por Turnos
// ============================================================
//

let readline = require("readline-sync");

// Um herói enfrenta uma sequência de 3 inimigos em batalhas por turnos.
// A cada turno, herói e inimigo atacam um ao outro simultaneamente.
// O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida).
//
// REGRAS:
//   - O herói começa com 100 HP.
//   - Cada inimigo é um objeto com HP, dano mínimo e dano máximo definidos em um array de inimigos.
//   - A cada turno, o herói escolhe uma ação:
//       1 – Atacar → causa dano aleatório entre seu dano mínimo e máximo
//       2 – Defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//       3 – Curar → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo deve ter por turno:
//     70% de chance de atacar → causa dano aleatório entre seu dano mínimo e máximo
//     20% de chance de defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//     10% de chance de curar  → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo ataca sempre com dano aleatório entre seu dano mínimo e dano máximo.
//   - O ataque tanto do jogador quando do inimigo devem ser realizados simultaneamente.
//   - Há uma chance de 5% do ataque (de ambos) ser um golpe crítico, causando o dobro de dano.
//     Caso isso corra, exiba que foi um dado crítico.
//   - Se o herói vencer, recupera 25 HP (sem ultrapassar 100).
//   - Se o herói perder, o jogo termina.
//
// AO FINAL DE CADA BATALHA:
//   - Exiba o resultado e a vida atual do herói.
//   - Se o herói vencer as 3 batalhas, exiba o resultado final.
//
// Após o desenvolvimento das regras base acima descritas, 
//   sinta-se livre para implementar melhorias e adicionar novos recursos.
//   - Exemplos de mecânicas adicionais:
//      - 2 tipos de armas para o herói, uma possuindo maior dano, mas possui menor precisão e a outra o inverso.
//      - Inimigos gerados aleatoriamente com atributos variados, aumentando exponencialmente a dificuldade.
//      - Sistema de níveis para o herói, permitindo que ele ganhe experiência e aumente suas habilidades.
//      - Itens e equipamentos que podem ser encontrados ou comprados (derrotar inimigos concede ouro), oferecendo bônus e habilidades especiais.
//      - Eventos aleatórios que podem ocorrer durante as batalhas, como a intervenção de aliados ou armadilhas no campo de batalha.
//
// ============================================================

// ============================================================
// HERÓI (não altere a estrutura — altere os valores se quiser)
// ============================================================

const heroi = {
    nome: "", // Deve ser preenchido pelo jogador
    hpAtual: 100,
    hpMax: 100,
    danoMin: 15,
    danoMax: 25
  };
  
  // ============================================================
  // INIMIGOS (não altere a estrutura — altere os valores se quiser)
  // Remova o inimigo da lista se ele for derrotado
  // ============================================================
  
  const inimigos = [
    { 
      nome: "Goblin",
      hp: 30,
      danoMin: 6,
      danoMax: 12
    },
    { 
      nome: "Orc Guerreiro",
      hp: 50,
      danoMin: 10,
      danoMax: 18
    },
    { 
      nome: "Dragão Negro",
      hp: 80,
      danoMin: 15,
      danoMax: 25
    }
  ];
  
  // ============================================================
  // INÍCIO DO JOGO
  // ============================================================
  
// EXPLICAÇÃO DA MINHA LINHA DE PENSAMENTO DE CRIACAO DE CODIGO PARA O JOGO:
// Conforme eu pesquisei pra facilitar a criacao do codigo,
// vou fazer um loop (for) sobre o codigo inteiro.
// O coração do codigo é a verificao se o heroi e 
// O inimigo estao vivos pra continuar o loop nos turnos

  console.log("╔═════════════════════════════════════╗");
  console.log("║   BEM VINDO(A) AO ELDRIN VORATHAR   ║");
  console.log("╚═════════════════════════════════════╝");  

  // Peça o nome do herói e exiba as regras do jogo resumidamente.
  // → Seu código aqui: 

heroi.nome = readline.question("Digite o nome do heroi: "); //ATUALIZA NOME DO HEROI DENTRO DO OBJETO

console.log(`
 === REGRAS DO RPG: BATALHA POR ELDRIN VORATHAR ===

// REGRAS:

=== HERÓI 
- O herói começa com 100 HP 

== INIMIGOS
- Cada inimigo é um objeto com:
  • HP 
  • Dano mínimo 
  • Dano máximo 
- Todos os inimigos ficam em um array

--- AÇÕES DO HERÓI (por turno)
1 – Atacar
   • Causa dano aleatório entre o dano mínimo e máximo

2 – Defender
   • Reduz em 75% o dano recebido neste turno (arredondado para baixo)

3 – Curar
   • Recupera entre 10 e 20 HP 
   • Pode ser usado apenas 1 vez por batalha

--- AÇÕES DO INIMIGO (por turno)
- 70% de chance de atacar 
- 20% de chance de defender 
- 10% de chance de curar  (1 vez por batalha)

--- COMBATE
- O ataque do herói e do inimigo acontecem simultaneamente
- O dano é sempre aleatório entre o mínimo e máximo

--- GOLPE CRÍTICO
- 5% de chance (para ambos)
- Causa o DOBRO de dano
- Exibir mensagem de "CRÍTICO!" quando acontecer

--- RESULTADOS
- Se o herói vencer:
  • Recupera 25 HP (máximo de 100)

- Se o herói perder:
  • GAME OVER 

 === Boa sorte, aventureiro! ===
`);
  // ============================================================
  // LOOP DE BATALHAS
  // ============================================================
  
  console.log("╔════════════════════════════╗");
  console.log("║    VAMOS AS BATATALHAS!    ║");
  console.log("╚════════════════════════════╝");
  
  // → Seu código aqui:
for (let i = 0; i < inimigos.length; i++) { //LOOP SOBRE O CODIGO INTEIRO
let inimigo = inimigos[i]; 
let curaHeroi = false;
let curaInimigo = false;
  console.log(`
       SEU PROXIMO INIMIGO É:`);
  console.table(inimigos[i])
 for (;;) { //ISSO AQUI É NOVO PRA MIM
    if (heroi.hpAtual <= 0 || inimigo.hp <= 0) break;

 console.log(`
 ============================================
 HEROI: ${heroi.nome}: ${heroi.hpAtual} HP/${heroi.hpMax} HP
 ============================================`);
 console.log(`
 ============================================ 
 INIMIGO: ${inimigo.nome}: ${inimigo.hp} HP
 ============================================`);

 console.log(`
                ===== ESCOLHA UMA ACAO =====
    1 – Atacar
        • Causa dano aleatório entre o dano mínimo e máximo
    2 – Defender
        • Reduz em 75% o dano recebido neste turno (arredondado para baixo)
    3 – Curar
        • Recupera entre 10 e 20 HP 
        • Pode ser usado apenas 1 vez por batalha
  `);


  let acaoDoHeroi = readline.questionInt("Digite sua acao: ");
  while (acaoDoHeroi < 1 || acaoDoHeroi > 3) {
    acaoDoHeroi = readline.questionInt("Valor invalido. Digite um numero de 1 a 3: ");
  };
  let danoDoHeroi = 0;
  let danoInimigo = 0;
  let defesaInimigo = false;
  let defesaHeroi = false;
  if (acaoDoHeroi === 1) {
    danoDoHeroi =  Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin + 1)) + heroi.danoMin; //MATH.RANDON PARA RETORNAR NUMERO ALEATORIO
      if (Math.random() < 0.05) {
        danoDoHeroi *= 2;
        console.log("DANO CRITICO!!!")
      }
  } else if (acaoDoHeroi === 2) {
        defesaHeroi = true;
  } else if (acaoDoHeroi === 3) {
    if (!curaHeroi) {
        let cura = Math.floor(Math.random() * 11) + 10;
        heroi.hpAtual = Math.min(heroi.hpAtual + cura, heroi.hpMax); //MATH MIN PARA RETORNAR MENOR VALOR
        curaHeroi= true; //AQUI BLOQUEIA O USO DA CURA
        console.log(` Você curou ${cura} HP!`);
    } else {
      console.log("Cura Ja Usada");  //SE TENTAR USAR CURA MAIS DE UMA VEZ APARECE ESSA MSG
    }
  }
  let ProbabilidadeAleatoria = Math.random();
  if (ProbabilidadeAleatoria < 0.7) { //AQUI ONDE O PROFESSOR FALOU PRA USAR O MATH.RANDOM E COMPARAR PARA TER A AÇÃO DO INIMIGO
    danoInimigo = Math.floor(Math.random() * (inimigo.danoMax - inimigo.danoMin + 1)) + inimigo.danoMin;
        if (Math.random() < 0.05) {
    danoInimigo *= 2;
    console.log("CRITICO DO INIMIGO!!!");
  }
} else if (ProbabilidadeAleatoria < 0.9){
     defesaInimigo = true;
} else {
  if (!curaInimigo){
    let cura = Math.floor(Math.random() * 11) + 10;
    inimigo.hp += cura;
    curaInimigo = true;
    console.log(` ${inimigo.nome} se curou ${cura} HP!`);
    }
  }
  if (defesaHeroi){
      danoInimigo = Math.floor(danoInimigo * 0.25);
    }
    if (defesaInimigo){
      danoDoHeroi= Math.floor(danoDoHeroi * 0.25);
    }
    inimigo.hp -= danoDoHeroi;
    heroi.hpAtual -= danoInimigo;
    console.log(`||||  VOCE CAUSOU ${danoDoHeroi}  ||||`);
    console.log(` O inimigo causou ${danoInimigo} de dano`);
  }
  if (heroi.hpAtual <= 0) {
    console.log(`
 === GAME OVER! ===
${heroi.nome} foi derrotado por ${inimigo.nome}
`);
  } else {
    console.log(` Você derrotou ${inimigo.nome}!`);
    heroi.hpAtual = Math.min(heroi.hpAtual + 25, heroi.hpMax);
    console.log(` Recuperou 25 HP. HP atual: ${heroi.hpAtual}`);
  }
};
  // ============================================================
  // RESULTADO FINAL
  // ============================================================
  //
  // PASSO 5 – Após o for de batalhas:
  //
  //   a) Se heroi.hp > 0 (venceu todas as batalhas):
  //        Exiba:
  //        "══════════════════════════════"
  //        "VOCÊ VENCEU O JOGO!"
  //        "<heroi.nome> sobreviveu a todas as batalhas!"
  //        "HP final: <heroi.hp>/<heroi.hpMax>"
  //        "══════════════════════════════"
  //
  //   b) Se heroi.hp <= 0 (foi derrotado):
  //        Exiba:
  //        "══════════════════════════════"
  //        "GAME OVER"
  //        "<heroi.nome> caiu em batalha contra o <nome do inimigo>"
  //        "══════════════════════════════"

  // → Seu código aqui:
if (heroi.hpAtual > 0) {
  console.log(`
══════════════════════════════
 VOCÊ VENCEU O JOGO!
${heroi.nome} sobreviveu a todas as batalhas!
HP final: ${heroi.hpAtual} / ${heroi.hpMax}
══════════════════════════════
`);
} 

function limparTerminal(){
  console.clear();
};
