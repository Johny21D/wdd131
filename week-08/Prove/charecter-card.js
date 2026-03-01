const character = {
  health: 1000,
  maxHealth: 1000,
  level: 1
};

const healthDisplay = document.getElementById("health");
const levelDisplay = document.getElementById("level");
const attackBtn = document.getElementById("button1");
const levelUpBtn = document.getElementById("button2");

attackBtn.addEventListener("click", () => {
  if (character.health > 0) {
    character.health -= 10;
    if (character.health < 0) character.health = 0;
    healthDisplay.textContent = `Health: ${character.health}/${character.maxHealth}`;
  }

  if (character.health <= 0) {
    healthDisplay.textContent = `Health: 0/${character.maxHealth} - DEFEATED`;
    attackBtn.disabled = true;
  }
});

levelUpBtn.addEventListener("click", () => {
  character.level += 1;
  character.maxHealth += 10;
  character.health += 10;
  if (character.health > character.maxHealth) character.health = character.maxHealth;

  levelDisplay.textContent = `Level: ${character.level}`;
  healthDisplay.textContent = `Health: ${character.health}/${character.maxHealth}`;
});