const livesDisplay = document.getElementById("lives");
const vann_knapp = document.getElementById("Vann");
const sol_knapp = document.getElementById("Sol");
const start = document.getElementById("startSpillBtn");
const startScreenContainer = document.getElementById("startScreenContainer");
const gameOverContainer = document.getElementById("gameOverContainer");
const gameOverContainer_vannetformye = document.getElementById("gameOverContainer_vannetformye");
const gameOverContainer_solformye = document.getElementById("gameOverContainer_solformye");
const bilde_plante = document.getElementById("bilde_plante");
const div_vann = document.getElementById("vann_bilde");

let antall_trykk_vann = 0;
let antall_trykk_sol = 0;
const maks_liv = 7;
let lives = 7;
let gameInterval; 

function giLiv() {
  if (lives < maks_liv) {
    lives++;
  }
  updateLivesDisplay();
}

function startGame() {
  gameInterval = setInterval(loseLife, 5000); 
}

vann_knapp.addEventListener("click", () => {
  giLiv();

  div_vann.innerHTML = "<img src='bilder/regn.gif'>";
  setTimeout(function() {
       div_vann.innerHTML = "";
    }, 2000);

    antall_trykk_vann++;
  if (antall_trykk_vann > 10) {
    gameOverContainer_vannetformye.style.display = "flex";
    resetGame();
    clearInterval(gameInterval); 
  }
});

sol_knapp.addEventListener("click", () => {
  giLiv();

  div_vann.innerHTML = "<img src='bilder/solgif.gif'>";
  setTimeout(function() {
       div_vann.innerHTML = "";
    }, 2000);

  antall_trykk_sol++;
  if (antall_trykk_sol > 10) {
    gameOverContainer_solformye.style.display = "flex";
    resetGame();
    clearInterval(gameInterval); 
  }

});

function loseLife() {
  lives--;
  updateLivesDisplay();

  if (lives === 0) {
    clearInterval(gameInterval);
    gameOverContainer.style.display = "flex";
    resetGame();
  }
}

function updateLivesDisplay() {
  const lifeIcons = document.querySelectorAll(".life");
  lifeIcons.forEach((icon, index) => {
    icon.style.visibility = index < lives ? "visible" : "hidden";
  });

  bilde_plante.src = "bilder/planter" + lives + ".jpg";
}

function resetGame() {
  lives = 7;
  updateLivesDisplay();
  startScreenContainer.style.display = "none";
}

start.addEventListener("click", () => {
  startScreenContainer.style.display = "none";
  gameOverContainer.style.display = "none";
  startGame();
});
