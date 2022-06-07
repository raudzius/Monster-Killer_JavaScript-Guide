const monsterHealthBar = document.getElementById('monster-health');

const attackBtn = document.getElementById('attack-btn');

const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
}

adjustHealthBars(chosenMaxLife);

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);
