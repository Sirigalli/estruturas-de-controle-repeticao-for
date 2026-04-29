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
  
  console.log("╔═════════════════════════════════════╗");
  console.log("║   BEM VINDO(A) AO ELDRIN VORATHAR   ║");
  console.log("╚═════════════════════════════════════╝");
  
  // Peça o nome do herói e exiba as regras do jogo resumidamente.
  // → Seu código aqui:

heroi.nome = readline.question("Digite o nome do heroi: ")

for (let i = 0; i < inimigos.length; i++) {

  let inimigo = inimigos[i];
  let curaHeroiUsada = false;
  let curaInimigoUsada = false;

  console.log(`\n⚔️ Um ${inimigo.nome} apareceu!`);

  while (heroi.hpAtual > 0 && inimigo.hp > 0) {

    console.log(`\n❤️ ${heroi.nome}: ${heroi.hpAtual}/${heroi.hpMax}`);
    console.log(`👹 ${inimigo.nome}: ${inimigo.hp} HP`);

    console.log(`
1 – Atacar
2 – Defender
3 – Curar
    `);

    let acaoHeroi = readline.questionInt("Escolha sua ação: ");

    let danoHeroi = 0;
    let danoInimigo = 0;

    let defendendoHeroi = false;
    let defendendoInimigo = false;

    // =========================
    // AÇÃO DO HERÓI
    // =========================
    if (acaoHeroi === 1) {
      danoHeroi = Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin + 1)) + heroi.danoMin;

      // crítico
      if (Math.random() < 0.05) {
        danoHeroi *= 2;
        console.log("💥 CRÍTICO do herói!");
      }

    } else if (acaoHeroi === 2) {
      defendendoHeroi = true;

    } else if (acaoHeroi === 3) {
      if (!curaHeroiUsada) {
        let cura = Math.floor(Math.random() * 11) + 10;
        heroi.hpAtual = Math.min(heroi.hpAtual + cura, heroi.hpMax);
        curaHeroiUsada = true;
        console.log(`💚 Você curou ${cura} HP!`);
      } else {
        console.log("❌ Cura já usada!");
      }
    }

    // =========================
    // AÇÃO DO INIMIGO
    // =========================
    let rng = Math.random();

    if (rng < 0.7) {
      danoInimigo = Math.floor(Math.random() * (inimigo.danoMax - inimigo.danoMin + 1)) + inimigo.danoMin;

      if (Math.random() < 0.05) {
        danoInimigo *= 2;
        console.log("💥 CRÍTICO do inimigo!");
      }

    } else if (rng < 0.9) {
      defendendoInimigo = true;

    } else {
      if (!curaInimigoUsada) {
        let cura = Math.floor(Math.random() * 11) + 10;
        inimigo.hp += cura;
        curaInimigoUsada = true;
        console.log(`👹 ${inimigo.nome} se curou ${cura} HP!`);
      }
    }

    // =========================
    // DEFESA
    // =========================
    if (defendendoHeroi) {
      danoInimigo = Math.floor(danoInimigo * 0.25);
    }

    if (defendendoInimigo) {
      danoHeroi = Math.floor(danoHeroi * 0.25);
    }

    // =========================
    // APLICA DANO (SIMULTÂNEO)
    // =========================
    inimigo.hp -= danoHeroi;
    heroi.hpAtual -= danoInimigo;

    console.log(`⚔️ Você causou ${danoHeroi} de dano`);
    console.log(`⚔️ O inimigo causou ${danoInimigo} de dano`);
  }

  // =========================
  // RESULTADO DA BATALHA
  // =========================
  if (heroi.hpAtual <= 0) {
    console.log(`
☠️ GAME OVER!
${heroi.nome} foi derrotado por ${inimigo.nome}
`);
    break;
  } else {
    console.log(`\n🏆 Você derrotou ${inimigo.nome}!`);

    heroi.hpAtual = Math.min(heroi.hpAtual + 25, heroi.hpMax);
    console.log(`💚 Recuperou 25 HP. HP atual: ${heroi.hpAtual}`);
  }
}