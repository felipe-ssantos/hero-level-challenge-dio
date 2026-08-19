// Lista de heróis (nome e XP)
const herois = [
  { nome: "Fulano", xp: 500 },
  { nome: "Marina", xp: 1500 },
  { nome: "Carlos", xp: 4000 },
  { nome: "Sicrano", xp: 7000 },
  { nome: "Mengano", xp: 8500 },
  { nome: "Zezinho", xp: 9500 },
  { nome: "Testeman", xp: 11000 }
];

// ---------------------------------------------
// 1) Usando FOR
console.log("--- Resultado usando FOR ---");
for (let i = 0; i < herois.length; i++) {
  const nome = herois[i].nome;
  const xp = herois[i].xp;
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 8000) {
    nivel = "Ouro";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Platina Diamante";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10900) {
    nivel = "Lendário Radiante";
  } else {
    nivel = "Sem classificação";
  }

  console.log("O heroi de nome " + nome + " está no nível de " + nivel);
}

// ---------------------------------------------
// 2) Usando WHILE
console.log("--- Resultado usando WHILE ---");
let j = 0;
while (j < herois.length) {
  const nome = herois[j].nome;
  const xp = herois[j].xp;
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 8000) {
    nivel = "Ouro";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Platina Diamante";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10900) {
    nivel = "Lendário Radiante";
  } else {
    nivel = "Sem classificação";
  }

  console.log("O heroi de nome " + nome + " está no nível de " + nivel);
  j++;
}

// ---------------------------------------------
// 3) Usando DO-WHILE
console.log("--- Resultado usando DO-WHILE ---");
let k = 0;
do {
  const nome = herois[k].nome;
  const xp = herois[k].xp;
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 8000) {
    nivel = "Ouro";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Platina Diamante";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10900) {
    nivel = "Lendário Radiante";
  } else {
    nivel = "Sem classificação";
  }

  console.log("O heroi de nome " + nome + " está no nível de " + nivel);
  k++;
} while (k < herois.length);
