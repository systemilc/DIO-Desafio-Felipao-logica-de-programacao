const niveis = [
  { nome: "Ferro", max: 1000 },
  { nome: "Bronze", min: 1001, max: 2000 },
  { nome: "Prata", min: 2001, max: 5000 },
  { nome: "Ouro", min: 5001, max: 7000 },
  { nome: "Platina", min: 7001, max: 8000 },
  { nome: "Ascendente", min: 8001, max: 9000 },
  { nome: "Imortal", min: 9001, max: 10000 },
  { nome: "Radiante", min: 10001 }
];

function calcularNivel(nome, xp) {
  const frase = `O jogador ${nome} tem ${xp} de XP e está no nível `;
  
  for (nivel of niveis) {
    const min = nivel.min ?? 0;
    const max = nivel.max ?? Infinity;

    if (xp >= min && xp <= max) {
      console.log(frase + nivel.nome);
      return;
    }
  }

}

calcularNivel("Isaac", 1001);
