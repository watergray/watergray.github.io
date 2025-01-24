// Videos de los personajes
const videos = [
  { name: "물", src: "assets/characters/gato.webm" },
  { name: "Conejo", src: "assets/characters/conejo.webm" }
];

let currentIndex = 0;

// Referencias al DOM
const videoElement = document.getElementById("character-video");
const characterName = document.getElementById("character-name");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

// Función para actualizar el video y el nombre
function updateCharacter(index) {
  const character = videos[index];
  videoElement.src = character.src;
  characterName.textContent = character.name;
}

// Navegar hacia el personaje anterior
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateCharacter(currentIndex);
  playSound();
});

// Navegar hacia el siguiente personaje
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  updateCharacter(currentIndex);
  playSound();
});

// Reproducir sonido al cambiar de personaje
function playSound() {
  const audio = new Audio("assets/click.ogg");
  audio.play();
}

// Inicializar con el primer personaje
updateCharacter(currentIndex);
